"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"

export const DashboardButtonBack = () => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push("/dashboard")}
      className="w-fit bg-white"
      variant="outline"
    >
      <ArrowLeft className="size-4" />
    </Button>
  )
}
