"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, Search, User } from "lucide-react"

export default function Navbar() {
  const [cartItems] = useState(3) // Mock cart count

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/shop" className="text-lg font-medium">
                  Shop All
                </Link>
                <Link href="/shop?category=wall-mirrors" className="text-lg font-medium">
                  Wall Mirrors
                </Link>
                <Link href="/shop?category=floor-mirrors" className="text-lg font-medium">
                  Floor Mirrors
                </Link>
                <Link href="/shop?category=vanity-mirrors" className="text-lg font-medium">
                  Vanity Mirrors
                </Link>
                <Link href="/shop?category=raw-materials" className="text-lg font-medium">
                  Raw Materials
                </Link>
                <Link href="/trade" className="text-lg font-medium">
                  Trade Program
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-slate-800">ReflectCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wide">Finished Mirrors</h4>
                      <div className="space-y-2">
                        <NavigationMenuLink asChild>
                          <Link href="/shop?category=wall-mirrors" className="block p-2 hover:bg-gray-50 rounded">
                            <div className="font-medium">Wall Mirrors</div>
                            <div className="text-sm text-gray-500">Decorative and functional wall mirrors</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/shop?category=floor-mirrors" className="block p-2 hover:bg-gray-50 rounded">
                            <div className="font-medium">Floor Mirrors</div>
                            <div className="text-sm text-gray-500">Full-length and standing mirrors</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/shop?category=vanity-mirrors" className="block p-2 hover:bg-gray-50 rounded">
                            <div className="font-medium">Vanity Mirrors</div>
                            <div className="text-sm text-gray-500">Bathroom and dressing table mirrors</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wide">Raw Materials</h4>
                      <div className="space-y-2">
                        <NavigationMenuLink asChild>
                          <Link href="/shop?category=mirror-sheets" className="block p-2 hover:bg-gray-50 rounded">
                            <div className="font-medium">Mirror Sheets</div>
                            <div className="text-sm text-gray-500">Bulk mirror sheets for professionals</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/shop?category=frames" className="block p-2 hover:bg-gray-50 rounded">
                            <div className="font-medium">Frames & Hardware</div>
                            <div className="text-sm text-gray-500">Frames, mounting hardware, adhesives</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/trade" className="block p-2 hover:bg-gray-50 rounded">
                            <div className="font-medium">Trade Program</div>
                            <div className="text-sm text-gray-500">Special pricing for professionals</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-amber-500">
                  {cartItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
