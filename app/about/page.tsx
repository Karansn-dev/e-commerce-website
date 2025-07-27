import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Leaf, Clock } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Award, label: "Years of Experience", value: "25+" },
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Leaf, label: "Sustainable Materials", value: "100%" },
    { icon: Clock, label: "Average Delivery", value: "3-5 Days" },
  ]

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 20 years in the glass and mirror industry, Sarah founded ReflectCraft to bring premium quality mirrors to homes and businesses.",
    },
    {
      name: "Michael Chen",
      role: "Master Craftsman",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael leads our production team with expertise in traditional mirror-making techniques combined with modern precision.",
    },
    {
      name: "Emma Rodriguez",
      role: "Design Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emma brings creative vision to our product line, ensuring each mirror meets both functional and aesthetic excellence.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over two decades, ReflectCraft has been dedicated to creating exceptional mirrors that transform
              spaces and reflect the beauty of fine craftsmanship. From our humble beginnings as a small family workshop
              to becoming a trusted name in the industry, we've never lost sight of our commitment to quality and
              customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                We believe that every space deserves the perfect mirror – one that not only serves its functional
                purpose but also enhances the beauty and character of its surroundings. Our mission is to craft mirrors
                that stand the test of time, using sustainable materials and traditional techniques passed down through
                generations.
              </p>
              <p className="text-lg text-gray-300">
                Whether you're a homeowner looking for that perfect statement piece or a professional contractor needing
                reliable raw materials, we're committed to providing products that exceed your expectations in both
                quality and service.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Craftsman at work"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing materials to delivering the final product
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  Every mirror is meticulously crafted using premium materials and time-tested techniques, ensuring
                  durability and beauty that lasts for generations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmental responsibility, sourcing materials locally when possible and
                  implementing eco-friendly practices throughout our production process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We work closely with each customer to understand their needs and
                  deliver solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind ReflectCraft's commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for the perfect mirror for your home or need bulk materials for your next project,
            we're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Browse Our Collection
            </a>
            <a
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
