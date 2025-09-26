"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"

export default function NewScriptPage() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    longDescription: "",
    downloadUrl: "",
    category: "",
    version: "1.0.0",
    fileSize: "",
    isPremium: false,
    isFeatured: false,
    isActive: true,
  })

  const [features, setFeatures] = useState<string[]>([])
  const [requirements, setRequirements] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [newFeature, setNewFeature] = useState("")
  const [newRequirement, setNewRequirement] = useState("")
  const [newTag, setNewTag] = useState("")

  const categories = [
    { value: "roblox", label: "Roblox" },
    { value: "cs2", label: "CS2" },
    { value: "valorant", label: "Valorant" },
    { value: "fortnite", label: "Fortnite" },
  ]

  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, newFeature.trim()])
      setNewFeature("")
    }
  }

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index))
  }

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()])
      setNewRequirement("")
    }
  }

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index))
  }

  const addTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const scriptData = {
      ...formData,
      features,
      requirements,
      tags,
    }

    console.log("Creating script:", scriptData)
    // Here you would submit to Supabase
    // const { data, error } = await supabase.from('scripts').insert([scriptData])

    alert("Script created successfully!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Add New Script</h1>
            <p className="text-purple-200">Create a new script for your platform</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white">Script Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-purple-200">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white"
                    placeholder="Enter script title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-purple-200">
                    Slug
                  </Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white"
                    placeholder="auto-generated-slug"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-purple-200">
                  Short Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-gray-800 border-purple-500/30 text-white"
                  placeholder="Brief description of the script"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="longDescription" className="text-purple-200">
                  Long Description
                </Label>
                <Textarea
                  id="longDescription"
                  value={formData.longDescription}
                  onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                  className="bg-gray-800 border-purple-500/30 text-white"
                  placeholder="Detailed description with features and usage"
                  rows={6}
                />
              </div>

              {/* Category and Version */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-purple-200">
                    Category
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="bg-gray-800 border-purple-500/30 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="version" className="text-purple-200">
                    Version
                  </Label>
                  <Input
                    id="version"
                    value={formData.version}
                    onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white"
                    placeholder="1.0.0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fileSize" className="text-purple-200">
                    File Size
                  </Label>
                  <Input
                    id="fileSize"
                    value={formData.fileSize}
                    onChange={(e) => setFormData({ ...formData, fileSize: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white"
                    placeholder="2.5 MB"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="downloadUrl" className="text-purple-200">
                  Download URL
                </Label>
                <Input
                  id="downloadUrl"
                  value={formData.downloadUrl}
                  onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                  className="bg-gray-800 border-purple-500/30 text-white"
                  placeholder="https://example.com/download"
                  required
                />
              </div>

              {/* Features */}
              <div className="space-y-2">
                <Label className="text-purple-200">Features</Label>
                <div className="flex gap-2">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white"
                    placeholder="Add a feature"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                  />
                  <Button type="button" onClick={addFeature} className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-900/50 text-purple-200">
                      {feature}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFeature(index)}
                        className="ml-1 h-auto p-0 text-purple-300 hover:text-white"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <Label className="text-purple-200">Requirements</Label>
                <div className="flex gap-2">
                  <Input
                    value={newRequirement}
                    onChange={(e) => setNewRequirement(e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white"
                    placeholder="Add a requirement"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addRequirement())}
                  />
                  <Button type="button" onClick={addRequirement} className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {requirements.map((requirement, index) => (
                    <Badge key={index} variant="secondary" className="bg-red-900/50 text-red-200">
                      {requirement}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeRequirement(index)}
                        className="ml-1 h-auto p-0 text-red-300 hover:text-white"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label className="text-purple-200">Tags</Label>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white"
                    placeholder="Add a tag"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/50 text-blue-200">
                      {tag}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeTag(index)}
                        className="ml-1 h-auto p-0 text-blue-300 hover:text-white"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isPremium" className="text-purple-200">
                      Premium Script
                    </Label>
                    <Switch
                      id="isPremium"
                      checked={formData.isPremium}
                      onCheckedChange={(checked) => setFormData({ ...formData, isPremium: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isFeatured" className="text-purple-200">
                      Featured
                    </Label>
                    <Switch
                      id="isFeatured"
                      checked={formData.isFeatured}
                      onCheckedChange={(checked) => setFormData({ ...formData, isFeatured: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isActive" className="text-purple-200">
                      Active
                    </Label>
                    <Switch
                      id="isActive"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Create Script
                </Button>
                <Link href="/admin">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white bg-transparent"
                  >
                    Cancel
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}
