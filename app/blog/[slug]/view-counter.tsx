"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

import { supabase } from "@/lib/supabase"

const DEBOUNCE_HOURS = 24

function getStorageKey(slug: string) {
  return `post-view:${slug}`
}

function shouldCountView(slug: string) {
  const raw = window.localStorage.getItem(getStorageKey(slug))
  if (!raw) return true
  const lastViewed = Number(raw)
  if (Number.isNaN(lastViewed)) return true
  return Date.now() - lastViewed > DEBOUNCE_HOURS * 60 * 60 * 1000
}

function markViewed(slug: string) {
  window.localStorage.setItem(getStorageKey(slug), String(Date.now()))
}

export function ViewCounter({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let active = true

    async function run() {
      if (shouldCountView(slug)) {
        const { data, error } = await supabase.rpc("increment_view_count", {
          p_slug: slug,
        })

        if (!error) {
          markViewed(slug)
          if (active) setCount(data as number)
          return
        }
      }

      const { data } = await supabase
        .from("post_views")
        .select("view_count")
        .eq("slug", slug)
        .maybeSingle()

      if (active) setCount(data?.view_count ?? 0)
    }

    run()

    return () => {
      active = false
    }
  }, [slug])

  return (
    <span className="inline-flex items-center gap-1">
      <Eye size={12} />
      {count === null ? "–" : count} dibaca
    </span>
  )
}
