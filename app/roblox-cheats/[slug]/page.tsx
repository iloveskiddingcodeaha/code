import { createServerClient } from "@/lib/supabase-server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Shield, Zap, Calendar, FileText, Tag } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export default async function ScriptDetailPage({ params }: PageProps) {
  const supabase = createServerClient()

  // Fetch script from database
  const { data: script, error } = await supabase
    .from("scripts")
    .select(`
      *,
      categories (
        name,
        slug,
        color
      ),
      profiles (
        username,
        full_name
      )
    `)
    .eq("slug", params.slug)
    .eq("is_active", true)
    .single()

  if (error || !script) {
    notFound()
  }

  // Fetch related scripts
  const { data: relatedScripts } = await supabase
    .from("scripts")
    .select("*")
    .eq("category_id", script.category_id)
    .neq("id", script.id)
    .eq("is_active", true)
    .limit(3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 border-purple-500/20 mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold text-white mb-2">{script.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-300">{script.description}</CardDescription>
                  </div>
                  {script.is_featured && (
                    <Badge className="bg-yellow-500 text-black font-semibold">
                      <Star className="h-4 w-4 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-400 mt-4">
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {script.downloads_count.toLocaleString()} downloads
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {script.rating.toFixed(1)} ({script.rating_count} reviews)
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Updated {new Date(script.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={
                      script.thumbnail_url ||
                      "/placeholder.svg?height=300&width=600&text=" + encodeURIComponent(script.title)
                    }
                    alt={script.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{script.long_description || script.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            {script.features && script.features.length > 0 && (
              <Card className="bg-gray-900/50 border-purple-500/20 mb-8">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-purple-400" />
                    Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {script.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Requirements */}
            {script.requirements && script.requirements.length > 0 && (
              <Card className="bg-gray-900/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-purple-400" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {script.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="h-2 w-2 bg-red-400 rounded-full mr-3"></div>
                        {requirement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Download Card */}
            <Card className="bg-gray-900/50 border-purple-500/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Download</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3">
                  <a href={script.download_url} target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5 mr-2" />
                    Download Now
                  </a>
                </Button>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Version:</span>
                    <p className="text-white font-medium">v{script.version}</p>
                  </div>
                  {script.file_size && (
                    <div>
                      <span className="text-gray-400">Size:</span>
                      <p className="text-white font-medium">{script.file_size}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Script Info */}
            <Card className="bg-gray-900/50 border-purple-500/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-purple-400" />
                  Script Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-gray-400 text-sm">Category:</span>
                  <p className="text-white font-medium">{script.categories?.name}</p>
                </div>
                {script.profiles && (
                  <div>
                    <span className="text-gray-400 text-sm">Author:</span>
                    <p className="text-white font-medium">
                      {script.profiles.full_name || script.profiles.username || "Anonymous"}
                    </p>
                  </div>
                )}
                <div>
                  <span className="text-gray-400 text-sm">Created:</span>
                  <p className="text-white font-medium">{new Date(script.created_at).toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Premium:</span>
                  <p className="text-white font-medium">{script.is_premium ? "Yes" : "Free"}</p>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            {script.tags && script.tags.length > 0 && (
              <Card className="bg-gray-900/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-purple-400" />
                    Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {script.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-900/50 text-purple-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Related Scripts */}
        {relatedScripts && relatedScripts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Scripts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedScripts.map((relatedScript) => (
                <Card
                  key={relatedScript.id}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <div className="relative h-32 w-full mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={
                          relatedScript.thumbnail_url ||
                          "/placeholder.svg?height=150&width=250&text=" + encodeURIComponent(relatedScript.title)
                        }
                        alt={relatedScript.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-white text-lg">{relatedScript.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm">{relatedScript.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span>{relatedScript.downloads_count.toLocaleString()} downloads</span>
                      <span>v{relatedScript.version}</span>
                    </div>
                    <Button asChild size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                      <a href={`/roblox-cheats/${relatedScript.slug}`}>View Script</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
