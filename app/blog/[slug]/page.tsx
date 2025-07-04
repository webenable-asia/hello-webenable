import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Mock blog post data - replace with Sanity CMS data
const blogPost = {
  title: "Getting Started with Modern Web Development",
  excerpt:
    "Learn the fundamentals of building modern web applications with the latest technologies and best practices.",
  category: "Development",
  publishedAt: "2024-01-15",
  readTime: "5 min read",
  content: `
    <h2>Introduction</h2>
    <p>Modern web development has evolved significantly over the past few years. With new frameworks, tools, and best practices emerging constantly, it can be overwhelming for developers to keep up.</p>
    
    <h2>Key Technologies</h2>
    <p>Here are some of the most important technologies every modern web developer should know:</p>
    <ul>
      <li><strong>React/Next.js</strong> - For building user interfaces and full-stack applications</li>
      <li><strong>TypeScript</strong> - For type-safe JavaScript development</li>
      <li><strong>Tailwind CSS</strong> - For utility-first styling</li>
      <li><strong>Vercel/Netlify</strong> - For deployment and hosting</li>
    </ul>
    
    <h2>Best Practices</h2>
    <p>Following these best practices will help you build better web applications:</p>
    <ol>
      <li>Write clean, maintainable code</li>
      <li>Implement proper error handling</li>
      <li>Optimize for performance</li>
      <li>Ensure accessibility compliance</li>
      <li>Test your applications thoroughly</li>
    </ol>
    
    <h2>Conclusion</h2>
    <p>Modern web development is an exciting field with endless possibilities. By staying up-to-date with the latest technologies and best practices, you can build amazing web experiences that delight users.</p>
  `,
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post based on the slug
  // For now, we'll use mock data

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{blogPost.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4 mr-1" />
                {new Date(blogPost.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {blogPost.readTime}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
            <p className="text-xl text-muted-foreground">{blogPost.excerpt}</p>
          </header>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </article>
      </div>
    </div>
  )
}
