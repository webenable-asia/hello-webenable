import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

// Mock blog data - replace with Sanity CMS data
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Modern Web Development",
    excerpt:
      "Learn the fundamentals of building modern web applications with the latest technologies and best practices.",
    category: "Development",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    slug: "getting-started-modern-web-development",
  },
  {
    id: "2",
    title: "The Future of Digital Marketing",
    excerpt:
      "Explore emerging trends and strategies that will shape the digital marketing landscape in the coming years.",
    category: "Marketing",
    publishedAt: "2024-01-10",
    readTime: "8 min read",
    slug: "future-digital-marketing",
  },
  {
    id: "3",
    title: "Building Scalable Business Solutions",
    excerpt:
      "Discover how to create business solutions that grow with your company and adapt to changing market needs.",
    category: "Business",
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    slug: "building-scalable-business-solutions",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">Insights, tips, and stories from our team</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
