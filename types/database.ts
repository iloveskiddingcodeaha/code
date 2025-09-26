export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          website: string | null
          discord_username: string | null
          is_premium: boolean
          downloads_count: number
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          discord_username?: string | null
          is_premium?: boolean
          downloads_count?: number
        }
        Update: {
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          discord_username?: string | null
          is_premium?: boolean
          downloads_count?: number
        }
      }
      categories: {
        Row: {
          id: string
          created_at: string
          name: string
          slug: string
          description: string | null
          icon: string | null
          color: string
          is_active: boolean
        }
        Insert: {
          name: string
          slug: string
          description?: string | null
          icon?: string | null
          color?: string
          is_active?: boolean
        }
        Update: {
          name?: string
          slug?: string
          description?: string | null
          icon?: string | null
          color?: string
          is_active?: boolean
        }
      }
      scripts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          slug: string
          description: string | null
          long_description: string | null
          thumbnail_url: string | null
          download_url: string
          category_id: string | null
          author_id: string | null
          version: string
          file_size: string | null
          requirements: string[] | null
          features: string[] | null
          tags: string[] | null
          is_premium: boolean
          is_featured: boolean
          is_active: boolean
          downloads_count: number
          rating: number
          rating_count: number
        }
        Insert: {
          title: string
          slug: string
          description?: string | null
          long_description?: string | null
          thumbnail_url?: string | null
          download_url: string
          category_id?: string | null
          author_id?: string | null
          version?: string
          file_size?: string | null
          requirements?: string[] | null
          features?: string[] | null
          tags?: string[] | null
          is_premium?: boolean
          is_featured?: boolean
          is_active?: boolean
        }
        Update: {
          title?: string
          slug?: string
          description?: string | null
          long_description?: string | null
          thumbnail_url?: string | null
          download_url?: string
          category_id?: string | null
          version?: string
          file_size?: string | null
          requirements?: string[] | null
          features?: string[] | null
          tags?: string[] | null
          is_premium?: boolean
          is_featured?: boolean
          is_active?: boolean
        }
      }
      forums: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          slug: string
          description: string | null
          category_id: string | null
          is_active: boolean
          posts_count: number
        }
        Insert: {
          title: string
          slug: string
          description?: string | null
          category_id?: string | null
          is_active?: boolean
        }
        Update: {
          title?: string
          slug?: string
          description?: string | null
          category_id?: string | null
          is_active?: boolean
        }
      }
      posts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          content: string
          author_id: string
          forum_id: string | null
          parent_id: string | null
          is_pinned: boolean
          is_locked: boolean
          replies_count: number
          views_count: number
        }
        Insert: {
          title: string
          content: string
          author_id: string
          forum_id?: string | null
          parent_id?: string | null
          is_pinned?: boolean
          is_locked?: boolean
        }
        Update: {
          title?: string
          content?: string
          is_pinned?: boolean
          is_locked?: boolean
        }
      }
    }
  }
}
