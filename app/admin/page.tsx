"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Download, Star, Plus, Edit, Trash2, Eye, ToggleLeft, ToggleRight, Crown } from "lucide-react"
import Link from "next/link"

// Mock data - replace with actual Supabase queries
const mockStats = {
  totalUsers: 1247,
  totalScripts: 45,
  totalDownloads: 89432,
  averageRating: 4.6,
}

const mockScripts = [
  {
    id: 1,
    title: "Fisch Script",
    category: "Roblox",
    downloads: 8920,
    rating: 4.4,
    isActive: true,
    isFeatured: false,
    isPremium: false,
    createdAt: "2024-01-18",
  },
  {
    id: 2,
    title: "Blox Fruits Auto Farm",
    category: "Roblox",
    downloads: 45230,
    rating: 4.9,
    isActive: true,
    isFeatured: true,
    isPremium: false,
    createdAt: "2024-01-22",
  },
  {
    id: 3,
    title: "Solara Executor",
    category: "Roblox",
    downloads: 15420,
    rating: 4.8,
    isActive: true,
    isFeatured: true,
    isPremium: false,
    createdAt: "2024-01-15",
  },
]

const mockUsers = [
  {
    id: 1,
    username: "user123",
    email: "user@example.com",
    isPremium: false,
    downloads: 15,
    joinedAt: "2024-01-10",
  },
  {
    id: 2,
    username: "premiumuser",
    email: "premium@example.com",
    isPremium: true,
    downloads: 89,
    joinedAt: "2024-01-05",
  },
  {
    id: 3,
    username: "newbie",
    email: "newbie@example.com",
    isPremium: false,
    downloads: 3,
    joinedAt: "2024-01-25",
  },
]

export default function AdminDashboard() {
  const [scripts, setScripts] = useState(mockScripts)
  const [users, setUsers] = useState(mockUsers)

  const toggleScriptStatus = (id: number, field: "isActive" | "isFeatured" | "isPremium") => {
    setScripts(scripts.map((script) => (script.id === id ? { ...script, [field]: !script[field] } : script)))
  }

  const toggleUserPremium = (id: number) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, isPremium: !user.isPremium } : user)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-purple-200">Manage your Purpleware platform</p>
          </div>
          <Link href="/admin/scripts/new">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Script
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-200">Total Users</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{mockStats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-purple-300">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-200">Total Scripts</CardTitle>
              <FileText className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{mockStats.totalScripts}</div>
              <p className="text-xs text-purple-300">+3 this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-200">Total Downloads</CardTitle>
              <Download className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{mockStats.totalDownloads.toLocaleString()}</div>
              <p className="text-xs text-purple-300">+8% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-200">Avg Rating</CardTitle>
              <Star className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{mockStats.averageRating}</div>
              <p className="text-xs text-purple-300">Excellent quality</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="scripts" className="space-y-6">
          <TabsList className="bg-gray-900/50 border-purple-500/20">
            <TabsTrigger value="scripts" className="data-[state=active]:bg-purple-600">
              Scripts
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-purple-600">
              Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scripts">
            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Scripts</CardTitle>
                <CardDescription className="text-purple-200">Manage your scripts and their settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scripts.map((script) => (
                    <div
                      key={script.id}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-purple-900/30"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-white">{script.title}</h3>
                          <Badge variant="outline" className="border-purple-500 text-purple-200">
                            {script.category}
                          </Badge>
                          {script.isFeatured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
                          {script.isPremium && <Badge className="bg-purple-600">Premium</Badge>}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-purple-300">
                          <span>{script.downloads.toLocaleString()} downloads</span>
                          <span>★ {script.rating}</span>
                          <span>Created {new Date(script.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleScriptStatus(script.id, "isActive")}
                          className="text-purple-300 hover:text-white"
                        >
                          {script.isActive ? (
                            <ToggleRight className="h-4 w-4 text-green-400" />
                          ) : (
                            <ToggleLeft className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleScriptStatus(script.id, "isFeatured")}
                          className="text-purple-300 hover:text-white"
                        >
                          <Star
                            className={`h-4 w-4 ${script.isFeatured ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                          />
                        </Button>

                        <Link href={`/admin/scripts/${script.id}/edit`}>
                          <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>

                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Users</CardTitle>
                <CardDescription className="text-purple-200">Manage user accounts and premium status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-purple-900/30"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-white">{user.username}</h3>
                          <span className="text-sm text-purple-300">{user.email}</span>
                          {user.isPremium && (
                            <Badge className="bg-purple-600">
                              <Crown className="h-3 w-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-purple-300">
                          <span>{user.downloads} downloads</span>
                          <span>Joined {new Date(user.joinedAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleUserPremium(user.id)}
                          className="text-purple-300 hover:text-white"
                        >
                          <Crown className={`h-4 w-4 ${user.isPremium ? "text-purple-400" : "text-gray-400"}`} />
                        </Button>

                        <Link href={`/admin/users/${user.id}`}>
                          <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
