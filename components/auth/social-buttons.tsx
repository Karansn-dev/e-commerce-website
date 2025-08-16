"use client"

import { Button } from "@/components/ui/button"
import { signInWithGoogle } from "@/lib/firebase"

export function SocialButtons() {
  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle()
    if (user) {
      localStorage.setItem("user", JSON.stringify({
        name: user.displayName,
        email: user.email,
      }))
      // You can redirect or update the UI here
      console.log("Logged in user:", user)
    }
  }

  return (
    <div className="flex items-center w-full gap-2">
      <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
        Continue with Google
      </Button>
    </div>
  )
}
