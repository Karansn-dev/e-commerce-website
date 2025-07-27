"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Filter, Grid, List } from "lucide-react"

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [filters, setFilters] = useState({
    category: [] as string[],
    priceRange: [] as string[],
    frameStyle: [] as string[],
    size: [] as string[],
  })

  const products = [
    {
      id: 1,
      name: "Venetian Gold Frame Mirror",
      price: 299.99,
      originalPrice: 399.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Wall Mirrors",
      frameStyle: "Ornate",
      size: "Medium",
      rating: 4.8,
      reviews: 124,
      description: "Elegant Venetian-style mirror with intricate gold frame detailing",
    },
    {
      id: 2,
      name: "Modern Minimalist Floor Mirror",
      price: 449.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Floor Mirrors",
      frameStyle: "Modern",
      size: "Large",
      rating: 4.9,
      reviews: 89,
      description: "Sleek full-length mirror with thin black metal frame",
    },
    {
      id: 3,
      name: "Premium Mirror Sheet - 4x6ft",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Raw Materials",
      frameStyle: "None",
      size: "Large",
      rating: 4.7,
      reviews: 156,
      description: "High-quality mirror sheet perfect for custom installations",
    },
    {
      id: 4,
      name: "Antique Brass Vanity Mirror",
      price: 189.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Vanity Mirrors",
      frameStyle: "Vintage",
      size: "Small",
      rating: 4.6,
      reviews: 73,
      description: "Classic vanity mirror with antique brass finish",
    },
    {
      id: 5,
      name: "Industrial Steel Frame Mirror",
      price: 329.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Wall Mirrors",
      frameStyle: "Industrial",
      size: "Large",
      rating: 4.5,
      reviews: 92,
      description: "Bold industrial design with weathered steel frame",
    },
    {
      id: 6,
      name: "Mirror Adhesive Kit",
      price: 24.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Raw Materials",
      frameStyle: "None",
      size: "Small",
      rating: 4.8,
      reviews: 203,
      description: "Professional-grade adhesive kit for mirror installation",
    },
  ]

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }))
  }

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (filters.category.length > 0 && !filters.category.includes(product.category)) return false
        if (filters.frameStyle.length > 0 && !filters.frameStyle.includes(product.frameStyle)) return false
        if (filters.size.length > 0 && !filters.size.includes(product.size)) return false
        return true
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          case "newest":
            return b.id - a.id
          default:
            return 0
        }
      })
  }, [filters, sortBy])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 space-y-6">
          <div className="flex items-center gap-2 lg:hidden">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filters</span>
          </div>

          <Accordion type="multiple" defaultValue={["category", "price", "frame", "size"]} className="w-full">
            <AccordionItem value="category">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {["Wall Mirrors", "Floor Mirrors", "Vanity Mirrors", "Raw Materials"].map((category) => (
                    <Label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox
                        checked={filters.category.includes(category)}
                        onCheckedChange={() => handleFilterChange("category", category)}
                      />
                      <span>{category}</span>
                    </Label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="frame">
              <AccordionTrigger>Frame Style</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {["Modern", "Ornate", "Vintage", "Industrial", "None"].map((style) => (
                    <Label key={style} className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox
                        checked={filters.frameStyle.includes(style)}
                        onCheckedChange={() => handleFilterChange("frameStyle", style)}
                      />
                      <span>{style}</span>
                    </Label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="size">
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {["Small", "Medium", "Large"].map((size) => (
                    <Label key={size} className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox
                        checked={filters.size.includes(size)}
                        onCheckedChange={() => handleFilterChange("size", size)}
                      />
                      <span>{size}</span>
                    </Label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>

            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                {viewMode === "grid" ? (
                  <>
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.originalPrice && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                    </div>
                    <CardContent className="p-4">
                      <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                      <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button size="sm" className="bg-slate-800 hover:bg-slate-700">
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                        {product.originalPrice && (
                          <Badge className="absolute top-1 left-1 bg-red-500 text-xs">Sale</Badge>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                            )}
                          </div>
                          <Button size="sm" className="bg-slate-800 hover:bg-slate-700">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
