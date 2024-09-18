'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Zap, Globe, Palette, ShoppingCart, TrendingUp } from 'lucide-react'

const carouselImages = [
  "/monke.jpg",
  "/monke.jpg",
  "/monke.jpg",
  "/monke.jpg",
]

export function EnhancedBwHomePage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">PrintMaster</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">Products</Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">Solutions</Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">Resources</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transition-colors">Log in</Button>
            <Button className="bg-black text-white hover:bg-gray-800 transition-colors">Sign up</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Print on demand for your ecommerce empire</h1>
              <p className="text-xl mb-8 text-gray-600">Unleash your creativity and watch your business soar with our cutting-edge print-on-demand service</p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors">Start creating</Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white transition-colors">Explore products</Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 relative"
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentImage}
                    src={carouselImages[currentImage]}
                    alt={`Product ${currentImage + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why choose PrintMaster</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "Global Reach", description: "Ship to customers worldwide with our extensive network of print providers" },
                { icon: Star, title: "Quality Guaranteed", description: "Premium products and printing techniques ensure customer satisfaction" },
                { icon: Zap, title: "Easy Integration", description: "Seamlessly connect with popular e-commerce platforms and start selling instantly" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <item.icon className="w-12 h-12 mb-4 text-gray-800" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Accelerate your business growth</h2>
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 mb-10 md:mb-0"
              >
                <h3 className="text-2xl font-semibold mb-4">Innovative design tools and apps</h3>
                <p className="text-gray-600 mb-6">Unlock your creativity with our suite of design tools. From beginner-friendly templates to advanced customization options, we've got everything you need to bring your ideas to life.</p>
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors">Explore tools</Button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <Image src="/monke.jpg" width={500} height={300} alt="Design tools" className="rounded-lg shadow-lg" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to revolutionize your print-on-demand business?</h2>
            <p className="text-xl mb-8">Join thousands of successful entrepreneurs using PrintMaster</p>
            <div className="flex justify-center">
              <Input className="w-full max-w-sm mr-4 bg-white text-black" placeholder="Enter your email" type="email" />
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-colors">Get started</Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What our customers say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah L.", quote: "PrintMaster has transformed my small business. The quality and ease of use are unmatched!" },
                { name: "Mike R.", quote: "I love how quickly I can create and sell new designs. It's opened up a whole new revenue stream for me." },
                { name: "Emily T.", quote: "The global shipping options have allowed me to reach customers I never thought possible. Thank you, PrintMaster!" }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Palette, title: "T-Shirts", description: "High-quality, comfortable tees perfect for any design" },
                { icon: ShoppingCart, title: "Mugs", description: "Durable ceramic mugs that make great gifts" },
                { icon: TrendingUp, title: "Posters", description: "Vibrant, high-resolution prints for wall art" },
                { icon: Zap, title: "Phone Cases", description: "Stylish and protective cases for various phone models" }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <product.icon className="w-12 h-12 mb-4 text-gray-800" />
                      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              {[
                { step: 1, title: "Create Your Design", description: "Use our easy-to-use design tools or upload your own artwork" },
                { step: 2, title: "Choose Your Products", description: "Select from our wide range of high-quality products" },
                { step: 3, title: "Set Up Your Store", description: "Integrate with your favorite e-commerce platform" },
                { step: 4, title: "Start Selling", description: "We'll handle printing and shipping for every order" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center mb-8 md:mb-0"
                >
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300 transition-colors">About us</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Help center</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Tutorials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Privacy policy</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Terms of service</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Cookie policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; 2023 PrintMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}