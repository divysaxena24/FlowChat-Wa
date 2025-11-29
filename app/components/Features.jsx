"use client";

import { MessageSquare, Workflow, BarChart3, Zap, Users, Shield } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: MessageSquare,
    title: "AI Smart Replies",
    description: "Understand intent, resolve queries instantly, and automate 70% of chats with our advanced AI algorithms."
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description: "Route conversations, trigger follow-ups, assign agents — all visually with our intuitive workflow builder."
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Monitor engagement, performance, revenue and CSAT in real time with actionable insights."
  },
  {
    icon: Zap,
    title: "Instant Automation",
    description: "Automate routine tasks and responses with our powerful automation engine that works 24/7."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team members and manage conversations across multiple channels."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance with global security standards to keep your data safe."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Supercharge WhatsApp with AI Intelligence
            </h2>
            <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
              Everything your support, sales, and automation teams need to deliver exceptional experiences.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass p-6 rounded-2xl border border-border hover:border-indigo-500/30 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 text-indigo-300 mb-5 group-hover:bg-gradient-to-br group-hover:from-indigo-500/30 group-hover:to-purple-600/30 transition-colors">
                <item.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              99.9%
            </div>
            <h3 className="font-semibold text-foreground mb-2">Uptime Guarantee</h3>
            <p className="text-foreground/70 text-sm">Reliable service to keep your business running 24/7.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              24/7
            </div>
            <h3 className="font-semibold text-foreground mb-2">Customer Support</h3>
            <p className="text-foreground/70 text-sm">Round-the-clock assistance for any questions or issues.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              500+
            </div>
            <h3 className="font-semibold text-foreground mb-2">Integrations</h3>
            <p className="text-foreground/70 text-sm">Connect with your favorite tools and platforms.</p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
