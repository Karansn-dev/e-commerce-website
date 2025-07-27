import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Truck, Award, ArrowRight } from "lucide-react"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Venetian Gold Frame Mirror",
      price: 299.99,
      originalPrice: 399.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Wall Mirrors",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Modern Minimalist Floor Mirror",
      price: 449.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Floor Mirrors",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Premium Mirror Sheet - 4x6ft",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Raw Materials",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Antique Brass Vanity Mirror",
      price: 189.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Vanity Mirrors",
      rating: 4.6,
      reviews: 73,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Interior Designer",
      content:
        "The quality of mirrors from this company is exceptional. My clients are always impressed with the craftsmanship and attention to detail.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mike Chen",
      role: "Contractor",
      content:
        "As a trade customer, I appreciate the bulk pricing and consistent quality. Their raw materials have never let me down on any project.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emma Davis",
      role: "Homeowner",
      content:
        "I bought a custom mirror for my living room and it completely transformed the space. Beautiful quality and excellent customer service.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1200" alt="Hero Mirror" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Reflect Your
            <span className="block text-amber-300">Perfect Style</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Premium mirrors and raw materials crafted with precision for homes and professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              Shop Mirrors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg bg-transparent"
            >
              For Trade Professionals
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Every mirror is crafted with precision using premium materials and traditional techniques
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Locally Sourced</h3>
              <p className="text-gray-600">
                Supporting local suppliers and maintaining the highest standards of sustainability
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and secure shipping with professional packaging to ensure perfect condition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular mirrors and materials, loved by customers and professionals alike
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
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
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white bg-transparent"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by homeowners and professionals across the country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-200">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete collection or get in touch for custom solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700 px-8 py-3 text-lg">
                Browse Collection
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
