"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Download, Star, Plus, Edit, Trash2, Eye, ToggleLeft, ToggleRight, Crown } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Script {
  id: string
  title: string
  description: string
  downloads_count: number
  rating: number
  rating_count: number
  is_active: boolean
  is_featured: boolean
  is_premium: boolean
  created_at: string
  categories: { name: string }
}

interface User {
  id: string
  email: string
  username: string
  full_name: string
  is_premium: boolean
  downloads_count: number
  created_at: string
}

interface Stats {
  totalUsers: number
  totalScripts: number
  totalDownloads: number
  averageRating: number
}

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<Stats>({ totalUsers: 0, totalScripts: 0, totalDownloads: 0, averageRating: 0 })
  const [scripts, setScripts] = useState<Script[]>([])
  const [users, setUsers] = useState<User[]>([])
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/login")
        return
      }

      // Check if user is admin
      const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", user.id).single()

      if (!profile?.is_admin) {
        router.push("/")
        return
      }

      setUser(user)
      await loadDashboardData()
    } catch (error) {
      console.error("Error checking user:", error)
      router.push("/login")
    } finally {
      setLoading(false)
    }
  }

  const loadDashboardData = async () => {
    try {
      // Load stats
      const [usersCount, scriptsCount, downloadsSum, ratingsAvg] = await Promise.all([
        supabase.from("profiles").select("id", { count: "exact" }),
        supabase.from("scripts").select("id", { count: "exact" }).eq("is_active", true),
        supabase.from("scripts").select("downloads_count"),
        supabase.from("scripts").select("rating, rating_count").eq("is_active", true),
      ])

      const totalDownloads = downloadsSum.data?.reduce((sum, script) => sum + script.downloads_count, 0) || 0
      const avgRating =
        ratingsAvg.data?.reduce((sum, script, _, arr) => {
          const weightedRating = script.rating * script.rating_count
          const totalRatings = arr.reduce((total, s) => total + s.rating_count, 0)
          return sum + weightedRating / totalRatings
        }, 0) || 0

      setStats({
        totalUsers: usersCount.count || 0,
        totalScripts: scriptsCount.count || 0,
        totalDownloads,
        averageRating: avgRating,
      })

      // Load recent scripts
      const { data: scriptsData } = await supabase
        .from("scripts")
        .select(`
          *,
          categories (name)
        `)
        .order("created_at", { ascending: false })
        .limit(10)

      setScripts(scriptsData || [])

      // Load recent users
      const { data: usersData } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10)

      setUsers(usersData || [])
    } catch (error) {
      console.error("Error loading dashboard data:", error)
    }
  }

  const toggleScriptStatus = async (
    scriptId: string,
    field: "is_active" | "is_featured" | "is_premium",
    currentValue: boolean,
  ) => {
    try {
      const { error } = await supabase
        .from("scripts")
        .update({ [field]: !currentValue })
        .eq("id", scriptId)

      if (error) throw error

      setScripts(scripts.map((script) => (script.id === scriptId ? { ...script, [field]: !currentValue } : script)))
    } catch (error) {
      console.error(`Error toggling ${field}:`, error)
    }
  }

  const deleteScript = async (scriptId: string) => {
    if (!confirm("Are you sure you want to delete this script?")) return

    try {
      const { error } = await supabase.from("scripts").delete().eq("id", scriptId)

      if (error) throw error

      setScripts(scripts.filter((script) => script.id !== scriptId))
    } catch (error) {
      console.error("Error deleting script:", error)
    }
  }

  const toggleUserPremium = async (userId: string, currentValue: boolean) => {
    try {
      const { error } = await supabase.from("profiles").update({ is_premium: !currentValue }).eq("id", userId)

      if (error) throw error

      setUsers(users.map((user) => (user.id === userId ? { ...user, is_premium: !currentValue } : user)))
    } catch (error) {
      console.error("Error toggling premium status:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading admin dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-purple-200">Manage your Purpleware platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Users</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Scripts</CardTitle>
              <FileText className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalScripts.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Downloads</CardTitle>
              <Download className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalDownloads.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.averageRating.toFixed(1)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="scripts" className="space-y-6">
          <TabsList className="bg-gray-900/50 border-purple-500/20">
            <TabsTrigger value="scripts" className="data-[state=active]:bg-purple-600">
              Scripts
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-purple-600">
              Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scripts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Script Management</h2>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/admin/scripts/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Script
                </Link>
              </Button>
            </div>

            <div className="grid gap-4">
              {scripts.map((script) => (
                <Card key={script.id} className="bg-gray-900/50 border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white">{script.title}</CardTitle>
                        <CardDescription className="text-gray-300">{script.description}</CardDescription>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                          <span>{script.downloads_count.toLocaleString()} downloads</span>
                          <span>
                            {script.rating.toFixed(1)} ★ ({script.rating_count})
                          </span>
                          <span>{script.categories?.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={script.is_active ? "default" : "secondary"}>
                          {script.is_active ? "Active" : "Inactive"}
                        </Badge>
                        {script.is_featured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
                        {script.is_premium && <Badge className="bg-purple-600">Premium</Badge>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleScriptStatus(script.id, "is_active", script.is_active)}
                        className="border-purple-500/50"
                      >
                        {script.is_active ? <ToggleRight className="h-4 w-4" /> : <ToggleLeft className="h-4 w-4" />}
                        {script.is_active ? "Deactivate" : "Activate"}
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleScriptStatus(script.id, "is_featured", script.is_featured)}
                        className="border-yellow-500/50"
                      >
                        <Star className="h-4 w-4" />
                        {script.is_featured ? "Unfeature" : "Feature"}
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleScriptStatus(script.id, "is_premium", script.is_premium)}
                        className="border-purple-500/50"
                      >
                        <Crown className="h-4 w-4" />
                        {script.is_premium ? "Make Free" : "Make Premium"}
                      </Button>

                      <Button size="sm" variant="outline" asChild className="border-blue-500/50 bg-transparent">
                        <Link href={`/admin/scripts/${script.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>

                      <Button size="sm" variant="outline" asChild className="border-green-500/50 bg-transparent">
                        <Link href={`/roblox-cheats/${script.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteScript(script.id)}
                        className="border-red-500/50 text-red-400 hover:bg-red-500/20"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <h2 className="text-2xl font-bold text-white">User Management</h2>

            <div className="grid gap-4">
              {users.map((user) => (
                <Card key={user.id} className="bg-gray-900/50 border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white">{user.full_name || user.username || "Anonymous"}</CardTitle>
                        <CardDescription className="text-gray-300">{user.email}</CardDescription>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                          <span>{user.downloads_count} downloads</span>
                          <span>Member since {new Date(user.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {user.is_premium && <Badge className="bg-purple-600">Premium</Badge>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleUserPremium(user.id, user.is_premium)}
                        className="border-purple-500/50"
                      >
                        <Crown className="h-4 w-4" />
                        {user.is_premium ? "Remove Premium" : "Grant Premium"}
                      </Button>

                      <Button size="sm" variant="outline" asChild className="border-blue-500/50 bg-transparent">
                        <Link href={`/admin/users/${user.id}`}>
                          <Eye className="h-4 w-4" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
