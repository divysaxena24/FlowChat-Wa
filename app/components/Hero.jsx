"use client";

import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, Users, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-card text-foreground min-h-screen flex items-center">

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-emerald-900/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-card to-transparent"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,120,120,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-4 py-2 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300">AI-Powered Solution</span>
            <span className="text-foreground/60">• Trusted by 10,000+ businesses</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Power your business with
            <span className="block gradient-text mt-2">
              AI-Driven WhatsApp Intelligence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed mb-10"
          >
            Automate conversations, accelerate support, and scale operations with FlowChat WA's intelligent workflow engine.
            Transform your customer engagement with the power of artificial intelligence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Button className="h-14 min-w-[220px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="h-14 min-w-[220px] rounded-full border-2 border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Watch Demo
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                70%
              </div>
              <div className="text-foreground/70 mt-2">Reduction in support load</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                4X
              </div>
              <div className="text-foreground/70 mt-2">More client scaling</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-foreground/70 mt-2">Automated customer support</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
