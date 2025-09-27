"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Category {
  id: string
  name: string
  slug: string
}

export default function NewScriptPage() {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [features, setFeatures] = useState<string[]>([""])
  const [requirements, setRequirements] = useState<string[]>([""])
  const [tags, setTags] = useState<string[]>([""])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    long_description: "",
    category_id: "",
    download_url: "",
    thumbnail_url: "",
    version: "1.0.0",
    file_size: "",
    is_premium: false,
    is_featured: false,
    is_active: true,
  })

  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      const { data } = await supabase.from("categories").select("*").order("name")

      setCategories(data || [])
    } catch (error) {
      console.error("Error loading categories:", error)
    }
  }

  const addArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((prev) => [...prev, ""])
  }

  const removeArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number) => {
    setter((prev) => prev.filter((_, i) => i !== index))
  }

  const updateArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number, value: string) => {
    setter((prev) => prev.map((item, i) => (i === index ? value : item)))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) throw new Error("Not authenticated")

      const slug = generateSlug(formData.title)
      const cleanFeatures = features.filter((f) => f.trim())
      const cleanRequirements = requirements.filter((r) => r.trim())
      const cleanTags = tags.filter((t) => t.trim())

      const { error } = await supabase.from("scripts").insert({
        ...formData,
        slug,
        features: cleanFeatures,
        requirements: cleanRequirements,
        tags: cleanTags,
        user_id: user.id,
        downloads_count: 0,
        rating: 0,
        rating_count: 0,
      })

      if (error) throw error

      router.push("/admin")
    } catch (error) {
      console.error("Error creating script:", error)
      alert("Error creating script. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/admin">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Admin
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Add New Script</h1>
          <p className="text-purple-200">Create a new script for your platform</p>
        </div>

        <Card className="bg-gray-900/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Script Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Title *
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-gray-800 border-purple-500/50 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">
                    Category *
                  </Label>
                  <Select
                    value={formData.category_id}
                    onValueChange={(value) => setFormData({ ...formData, category_id: value })}
                  >
                    <SelectTrigger className="bg-gray-800 border-purple-500/50 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">
                  Short Description *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-gray-800 border-purple-500/50 text-white"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="long_description" className="text-white">
                  Long Description
                </Label>
                <Textarea
                  id="long_description"
                  value={formData.long_description}
                  onChange={(e) => setFormData({ ...formData, long_description: e.target.value })}
                  className="bg-gray-800 border-purple-500/50 text-white"
                  rows={6}
                />
              </div>

              {/* URLs and Version */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="download_url" className="text-white">
                    Download URL *
                  </Label>
                  <Input
                    id="download_url"
                    type="url"
                    value={formData.download_url}
                    onChange={(e) => setFormData({ ...formData, download_url: e.target.value })}
                    className="bg-gray-800 border-purple-500/50 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="thumbnail_url" className="text-white">
                    Thumbnail URL
                  </Label>
                  <Input
                    id="thumbnail_url"
                    type="url"
                    value={formData.thumbnail_url}
                    onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                    className="bg-gray-800 border-purple-500/50 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="version" className="text-white">
                    Version
                  </Label>
                  <Input
                    id="version"
                    value={formData.version}
                    onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                    className="bg-gray-800 border-purple-500/50 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file_size" className="text-white">
                    File Size
                  </Label>
                  <Input
                    id="file_size"
                    value={formData.file_size}
                    onChange={(e) => setFormData({ ...formData, file_size: e.target.value })}
                    className="bg-gray-800 border-purple-500/50 text-white"
                    placeholder="e.g., 2.5 MB"
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <Label className="text-white">Features</Label>
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={feature}
                      onChange={(e) => updateArrayItem(setFeatures, index, e.target.value)}
                      className="bg-gray-800 border-purple-500/50 text-white"
                      placeholder="Enter feature"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem(setFeatures, index)}
                      className="border-red-500/50 text-red-400"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem(setFeatures)}
                  className="border-purple-500/50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Feature
                </Button>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <Label className="text-white">Requirements</Label>
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={requirement}
                      onChange={(e) => updateArrayItem(setRequirements, index, e.target.value)}
                      className="bg-gray-800 border-purple-500/50 text-white"
                      placeholder="Enter requirement"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem(setRequirements, index)}
                      className="border-red-500/50 text-red-400"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem(setRequirements)}
                  className="border-purple-500/50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Requirement
                </Button>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label className="text-white">Tags</Label>
                {tags.map((tag, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={tag}
                      onChange={(e) => updateArrayItem(setTags, index, e.target.value)}
                      className="bg-gray-800 border-purple-500/50 text-white"
                      placeholder="Enter tag"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem(setTags, index)}
                      className="border-red-500/50 text-red-400"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem(setTags)}
                  className="border-purple-500/50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Tag
                </Button>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Settings</h3>

                <div className="flex items-center justify-between">
                  <Label htmlFor="is_premium" className="text-white">
                    Premium Script
                  </Label>
                  <Switch
                    id="is_premium"
                    checked={formData.is_premium}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_premium: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="is_featured" className="text-white">
                    Featured Script
                  </Label>
                  <Switch
                    id="is_featured"
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="is_active" className="text-white">
                    Active
                  </Label>
                  <Switch
                    id="is_active"
                    checked={formData.is_active}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-700">
                  {loading ? "Creating..." : "Create Script"}
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/admin">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
