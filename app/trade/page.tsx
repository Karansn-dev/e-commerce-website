"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Truck, DollarSign, Clock, Award } from "lucide-react"

export default function TradePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    yearsInBusiness: "",
    annualVolume: "",
    taxId: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Trade application submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const benefits = [
    {
      icon: DollarSign,
      title: "Wholesale Pricing",
      description: "Access to special trade pricing with volume discounts up to 40% off retail prices",
    },
    {
      icon: Truck,
      title: "Priority Shipping",
      description: "Expedited processing and shipping for urgent project deadlines",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager and technical support for all your project needs",
    },
    {
      icon: Clock,
      title: "Extended Terms",
      description: "Flexible payment terms and credit options for qualified businesses",
    },
    {
      icon: Award,
      title: "Custom Solutions",
      description: "Access to custom sizing, special finishes, and bulk material options",
    },
  ]

  const requirements = [
    "Valid business license and tax ID",
    "Minimum 2 years in business",
    "Professional references",
    "Estimated annual purchase volume",
    "Proof of business insurance",
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Trade Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exclusive trade program designed for contractors, builders, interior designers, and other
            professionals who need reliable access to premium mirrors and raw materials.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Program Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16 bg-gray-50 py-12 -mx-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing Tiers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Badge variant="secondary" className="mb-2">
                      Bronze
                    </Badge>
                    <div className="text-2xl font-bold">15% Off</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">$5,000 - $15,000 annual volume</p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      15% discount on all products
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Standard shipping rates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Email support
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-500 border-2">
                <CardHeader>
                  <CardTitle className="text-center">
                    <Badge className="mb-2 bg-amber-500">Silver</Badge>
                    <div className="text-2xl font-bold">25% Off</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">$15,000 - $50,000 annual volume</p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      25% discount on all products
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Free shipping on orders $500+
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Priority phone support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      30-day payment terms
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Badge variant="secondary" className="mb-2 bg-slate-800 text-white">
                      Gold
                    </Badge>
                    <div className="text-2xl font-bold">40% Off</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">$50,000+ annual volume</p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      40% discount on all products
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Free shipping on all orders
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      60-day payment terms
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom product development
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Trade Program Application</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleChange("contactName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessType">Business Type *</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleChange("businessType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="contractor">General Contractor</SelectItem>
                          <SelectItem value="interior-designer">Interior Designer</SelectItem>
                          <SelectItem value="glass-company">Glass Company</SelectItem>
                          <SelectItem value="furniture-maker">Furniture Maker</SelectItem>
                          <SelectItem value="retailer">Retailer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                      <Select
                        value={formData.yearsInBusiness}
                        onValueChange={(value) => handleChange("yearsInBusiness", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select years" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-5">2-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="11-20">11-20 years</SelectItem>
                          <SelectItem value="20+">20+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="annualVolume">Estimated Annual Volume *</Label>
                      <Select
                        value={formData.annualVolume}
                        onValueChange={(value) => handleChange("annualVolume", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="taxId">Tax ID / EIN *</Label>
                      <Input
                        id="taxId"
                        value={formData.taxId}
                        onChange={(e) => handleChange("taxId", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Business Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleChange("state", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Zip Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleChange("zipCode", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Business Description</Label>
                    <Textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleChange("description", e.target.value)}
                      placeholder="Tell us about your business and how you plan to use our products..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-slate-800 hover:bg-slate-700">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Requirements & Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Submit Application</h4>
                      <p className="text-gray-600 text-sm">Complete and submit the trade application form</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Review Process</h4>
                      <p className="text-gray-600 text-sm">We review your application within 2-3 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Account Setup</h4>
                      <p className="text-gray-600 text-sm">
                        Upon approval, we'll set up your trade account with special pricing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Start Ordering</h4>
                      <p className="text-gray-600 text-sm">
                        Begin placing orders with your new trade pricing and benefits
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Have questions about our trade program? Our team is here to help.</p>
                <div className="space-y-2">
                  <p>
                    <strong>Trade Program Manager:</strong> (555) 123-4568
                  </p>
                  <p>
                    <strong>Email:</strong> trade@reflectcraft.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
