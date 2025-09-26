"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Download, Calendar, Crown, Mail } from "lucide-react"
import Link from "next/link"

interface UserProfile {
  id: string
  username: string
  full_name: string
  email: string
  avatar_url: string
  bio: string
  website: string
  discord_username: string
  is_premium: boolean
  downloads_count: number
  created_at: string
  updated_at: string
}

interface UserDownload {
  id: string
  created_at: string
  script: {
    title: string
    slug: string
    category: {
      name: string
    }
  }
}

export default function UserDetail() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<UserProfile | null>(null)
  const [downloads, setDownloads] = useState<UserDownload[]>([])
  const router = useRouter()
  const params = useParams()
  const userId = params.id as string

  useEffect(() => {
    loadUserData()
  }, [userId])

  const loadUserData = async () => {
    try {
      // Load user profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single()

      if (profileError) throw profileError

      // Get user email from auth
      const {
        data: { users },
        error: usersError,
      } = await supabase.auth.admin.listUsers()
      if (usersError) throw usersError

      const authUser = users.find((u) => u.id === userId)

      setUser({
        ...profileData,
        email: authUser?.email || "No email",
      })

      // Load user downloads
      const { data: downloadsData } = await supabase
        .from("downloads")
        .select(`
          id,
          created_at,
          scripts!inner(
            title,
            slug,
            categories(name)
          )
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(20)

      setDownloads(
        downloadsData?.map((download) => ({
          id: download.id,
          created_at: download.created_at,
          script: {
            title: download.scripts.title,
            slug: download.scripts.slug,
            category: {
              name: download.scripts.categories?.name || "Unknown",
            },
          },
        })) || [],
      )
    } catch (error) {
      console.error("Error loading user data:", error)
      router.push("/admin")
    } finally {
      setLoading(false)
    }
  }

  const togglePremiumStatus = async () => {
    if (!user) return

    try {
      const { error } = await supabase.from("profiles").update({ is_premium: !user.is_premium }).eq("id", userId)

      if (error) throw error

      setUser((prev) => (prev ? { ...prev, is_premium: !prev.is_premium } : null))
    } catch (error) {
      console.error("Error updating premium status:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading user data...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">User not found</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white">User Details</h1>
            <p className="text-purple-200">Manage user account and activity</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="w-5 h-5" />
                  User Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {user.avatar_url && (
                  <div className="flex justify-center">
                    <img
                      src={user.avatar_url || "/placeholder.svg"}
                      alt="User Avatar"
                      className="w-24 h-24 rounded-full border-2 border-purple-500"
                    />
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-purple-200">Username</label>
                    <p className="text-white font-medium">{user.username || "No username"}</p>
                  </div>

                  <div>
                    <label className="text-sm text-purple-200">Full Name</label>
                    <p className="text-white font-medium">{user.full_name || "No full name"}</p>
                  </div>

                  <div>
                    <label className="text-sm text-purple-200">Email</label>
                    <p className="text-white font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {user.email}
                    </p>
                  </div>

                  {user.discord_username && (
                    <div>
                      <label className="text-sm text-purple-200">Discord</label>
                      <p className="text-white font-medium">{user.discord_username}</p>
                    </div>
                  )}

                  {user.website && (
                    <div>
                      <label className="text-sm text-purple-200">Website</label>
                      <p className="text-white font-medium">
                        <a
                          href={user.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-200"
                        >
                          {user.website}
                        </a>
                      </p>
                    </div>
                  )}

                  {user.bio && (
                    <div>
                      <label className="text-sm text-purple-200">Bio</label>
                      <p className="text-white">{user.bio}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Premium Status</span>
                    <Badge variant={user.is_premium ? "default" : "secondary"}>
                      {user.is_premium ? (
                        <>
                          <Crown className="w-3 h-3 mr-1" />
                          Premium
                        </>
                      ) : (
                        "Free"
                      )}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Total Downloads</span>
                    <Badge variant="outline" className="text-white">
                      <Download className="w-3 h-3 mr-1" />
                      {user.downloads_count}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Member Since</span>
                    <Badge variant="outline" className="text-white">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(user.created_at).toLocaleDateString()}
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-500/20">
                  <Button
                    onClick={togglePremiumStatus}
                    className={`w-full ${
                      user.is_premium ? "bg-red-600 hover:bg-red-700" : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    {user.is_premium ? "Remove Premium" : "Grant Premium"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download History */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Download History</CardTitle>
                <CardDescription className="text-purple-200">Recent downloads by this user</CardDescription>
              </CardHeader>
              <CardContent>
                {downloads.length === 0 ? (
                  <div className="text-center py-8">
                    <Download className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <p className="text-purple-200">No downloads yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {downloads.map((download) => (
                      <div key={download.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <h4 className="font-medium text-white">{download.script.title}</h4>
                          <p className="text-sm text-purple-200">Category: {download.script.category.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-purple-200">
                            {new Date(download.created_at).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-purple-300">
                            {new Date(download.created_at).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
