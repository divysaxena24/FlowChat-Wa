"use client";

import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for small businesses getting started",
      features: [
        "1,000 Contacts",
        "Basic Automations",
        "Shared Inbox",
        "Email Support",
        "Standard Analytics"
      ],
      cta: "Get Started",
      mostPopular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "month",
      description: "For growing businesses with advanced needs",
      features: [
        "10,000 Contacts",
        "Advanced Flows",
        "Broadcasts",
        "Analytics Dashboard",
        "Priority Support",
        "API Access",
        "Team Collaboration"
      ],
      cta: "Start Free Trial",
      mostPopular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited Contacts",
        "Enterprise Routing",
        "Dedicated Manager",
        "Custom Integrations",
        "SLA Guarantee",
        "24/7 Premium Support",
        "Advanced Security",
        "Custom Reporting"
      ],
      cta: "Contact Sales",
      mostPopular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-card">
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
              Plans that scale with your growth
            </h2>
            <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
              Start free. Upgrade anytime. No credit card required.
            </p>

            {/* Pricing toggle */}
            <div className="inline-flex items-center bg-card border border-border rounded-full p-1">
              <button className="px-4 py-2 rounded-full text-foreground/70 text-sm">Monthly</button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-md">Yearly <span className="text-xs ml-1 bg-white/20 px-1.5 py-0.5 rounded-full">Save 20%</span></button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 border backdrop-blur-lg transition-all duration-300 group
                ${plan.mostPopular
                  ? "bg-gradient-to-br from-indigo-500/5 to-purple-600/5 border-indigo-500/50 shadow-xl shadow-indigo-500/20 scale-[1.02] z-10"
                  : "bg-card border-border hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10"}`}
            >
              {/* Popular badge */}
              {plan.mostPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-4 py-1.5 rounded-full font-medium">
                    <Sparkles className="w-3 h-3" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="pt-4">
                <h3 className={`text-xl font-bold text-foreground mb-2 ${plan.mostPopular ? "text-center" : ""}`}>{plan.name}</h3>
                <div className={`text-3xl font-bold gradient-text mb-1 ${plan.mostPopular ? "text-center" : ""}`}>{plan.price}<span className="text-foreground/70 text-lg">/{plan.period}</span></div>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                <Button
                  className={`w-full font-semibold py-6 rounded-xl text-lg ${
                    plan.mostPopular
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:opacity-95"
                      : "bg-card border border-border text-foreground hover:bg-accent"
                  }`}
                >
                  {plan.cta}
                </Button>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-foreground font-semibold mb-4">Everything you need to grow</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-indigo-400">14d</div>
              <div className="text-foreground/70 text-sm">Free Trial</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-indigo-400">99.9%</div>
              <div className="text-foreground/70 text-sm">Uptime</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-indigo-400">24/7</div>
              <div className="text-foreground/70 text-sm">Support</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-indigo-400">SSL</div>
              <div className="text-foreground/70 text-sm">Secure</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
