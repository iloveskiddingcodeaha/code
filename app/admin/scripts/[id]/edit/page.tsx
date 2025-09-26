"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"

interface Category {
  id: string
  name: string
  slug: string
}

export default function EditScript() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [features, setFeatures] = useState<string[]>([""])
  const [requirements, setRequirements] = useState<string[]>([""])
  const [tags, setTags] = useState<string[]>([""])
  const router = useRouter()
  const params = useParams()
  const scriptId = params.id as string

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    longDescription: "",
    thumbnailUrl: "",
    downloadUrl: "",
    categoryId: "",
    version: "1.0",
    fileSize: "",
    isPremium: false,
    isFeatured: false,
    isActive: true,
  })

  useEffect(() => {
    loadCategories()
    loadScript()
  }, [scriptId])

  const loadCategories = async () => {
    try {
      const { data } = await supabase.from("categories").select("id, name, slug").eq("is_active", true).order("name")

      setCategories(data || [])
    } catch (error) {
      console.error("Error loading categories:", error)
    }
  }

  const loadScript = async () => {
    try {
      const { data, error } = await supabase.from("scripts").select("*").eq("id", scriptId).single()

      if (error) throw error

      setFormData({
        title: data.title,
        slug: data.slug,
        description: data.description || "",
        longDescription: data.long_description || "",
        thumbnailUrl: data.thumbnail_url || "",
        downloadUrl: data.download_url,
        categoryId: data.category_id || "",
        version: data.version,
        fileSize: data.file_size || "",
        isPremium: data.is_premium,
        isFeatured: data.is_featured,
        isActive: data.is_active,
      })

      setFeatures(data.features || [""])
      setRequirements(data.requirements || [""])
      setTags(data.tags || [""])
    } catch (error) {
      console.error("Error loading script:", error)
      router.push("/admin")
    } finally {
      setLoading(false)
    }
  }

  const addArrayItem = (type: "features" | "requirements" | "tags") => {
    if (type === "features") setFeatures([...features, ""])
    if (type === "requirements") setRequirements([...requirements, ""])
    if (type === "tags") setTags([...tags, ""])
  }

  const removeArrayItem = (type: "features" | "requirements" | "tags", index: number) => {
    if (type === "features") setFeatures(features.filter((_, i) => i !== index))
    if (type === "requirements") setRequirements(requirements.filter((_, i) => i !== index))
    if (type === "tags") setTags(tags.filter((_, i) => i !== index))
  }

  const updateArrayItem = (type: "features" | "requirements" | "tags", index: number, value: string) => {
    if (type === "features") {
      const newFeatures = [...features]
      newFeatures[index] = value
      setFeatures(newFeatures)
    }
    if (type === "requirements") {
      const newRequirements = [...requirements]
      newRequirements[index] = value
      setRequirements(newRequirements)
    }
    if (type === "tags") {
      const newTags = [...tags]
      newTags[index] = value
      setTags(newTags)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const scriptData = {
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        long_description: formData.longDescription,
        thumbnail_url: formData.thumbnailUrl || null,
        download_url: formData.downloadUrl,
        category_id: formData.categoryId || null,
        version: formData.version,
        file_size: formData.fileSize || null,
        features: features.filter((f) => f.trim()),
        requirements: requirements.filter((r) => r.trim()),
        tags: tags.filter((t) => t.trim()),
        is_premium: formData.isPremium,
        is_featured: formData.isFeatured,
        is_active: formData.isActive,
        updated_at: new Date().toISOString(),
      }

      const { error } = await supabase.from("scripts").update(scriptData).eq("id", scriptId)

      if (error) throw error

      router.push("/admin")
    } catch (error) {
      console.error("Error updating script:", error)
      alert("Error updating script. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading script...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white">Edit Script</h1>
            <p className="text-purple-200">Update script information</p>
          </div>
        </div>

        <Card className="bg-white/10 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Script Details</CardTitle>
            <CardDescription className="text-purple-200">Update the information for this script</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    className="bg-white/10 border-purple-500/20 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-white">
                    Slug
                  </Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                    className="bg-white/10 border-purple-500/20 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">
                    Category
                  </Label>
                  <Select
                    value={formData.categoryId}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, categoryId: value }))}
                  >
                    <SelectTrigger className="bg-white/10 border-purple-500/20 text-white">
                      <SelectValue placeholder="Select a category" />
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

                <div className="space-y-2">
                  <Label htmlFor="version" className="text-white">
                    Version
                  </Label>
                  <Input
                    id="version"
                    value={formData.version}
                    onChange={(e) => setFormData((prev) => ({ ...prev, version: e.target.value }))}
                    className="bg-white/10 border-purple-500/20 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fileSize" className="text-white">
                    File Size
                  </Label>
                  <Input
                    id="fileSize"
                    value={formData.fileSize}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fileSize: e.target.value }))}
                    placeholder="e.g., 2.5 MB"
                    className="bg-white/10 border-purple-500/20 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="thumbnailUrl" className="text-white">
                    Thumbnail URL
                  </Label>
                  <Input
                    id="thumbnailUrl"
                    value={formData.thumbnailUrl}
                    onChange={(e) => setFormData((prev) => ({ ...prev, thumbnailUrl: e.target.value }))}
                    className="bg-white/10 border-purple-500/20 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="downloadUrl" className="text-white">
                  Download URL
                </Label>
                <Input
                  id="downloadUrl"
                  value={formData.downloadUrl}
                  onChange={(e) => setFormData((prev) => ({ ...prev, downloadUrl: e.target.value }))}
                  className="bg-white/10 border-purple-500/20 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">
                  Short Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  className="bg-white/10 border-purple-500/20 text-white"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="longDescription" className="text-white">
                  Long Description
                </Label>
                <Textarea
                  id="longDescription"
                  value={formData.longDescription}
                  onChange={(e) => setFormData((prev) => ({ ...prev, longDescription: e.target.value }))}
                  className="bg-white/10 border-purple-500/20 text-white"
                  rows={6}
                />
              </div>

              {/* Features */}
              <div className="space-y-2">
                <Label className="text-white">Features</Label>
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={feature}
                      onChange={(e) => updateArrayItem("features", index, e.target.value)}
                      placeholder="Enter a feature"
                      className="bg-white/10 border-purple-500/20 text-white"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem("features", index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("features")}>
                  <Plus className="w-4 h-4 mr-2" />
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
                      onChange={(e) => updateArrayItem("requirements", index, e.target.value)}
                      placeholder="Enter a requirement"
                      className="bg-white/10 border-purple-500/20 text-white"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem("requirements", index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("requirements")}>
                  <Plus className="w-4 h-4 mr-2" />
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
                      onChange={(e) => updateArrayItem("tags", index, e.target.value)}
                      placeholder="Enter a tag"
                      className="bg-white/10 border-purple-500/20 text-white"
                    />
                    <Button type="button" variant="outline" size="sm" onClick={() => removeArrayItem("tags", index)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("tags")}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Tag
                </Button>
              </div>

              {/* Checkboxes */}
              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isPremium"
                    checked={formData.isPremium}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isPremium: !!checked }))}
                  />
                  <Label htmlFor="isPremium" className="text-white">
                    Premium Script
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isFeatured: !!checked }))}
                  />
                  <Label htmlFor="isFeatured" className="text-white">
                    Featured Script
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isActive"
                    checked={formData.isActive}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isActive: !!checked }))}
                  />
                  <Label htmlFor="isActive" className="text-white">
                    Active
                  </Label>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={saving} className="bg-purple-600 hover:bg-purple-700">
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
                <Link href="/admin">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
