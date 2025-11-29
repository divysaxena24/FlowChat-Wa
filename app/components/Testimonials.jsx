"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aman Verma",
      role: "E-Commerce Founder",
      text: "FlowChat WA helped us reduce support load by 70%. Automation is insanely accurate! The AI understands context better than our human agents in most cases.",
      avatar: "AV"
    },
    {
      name: "Riya Sharma",
      role: "Agency Owner",
      text: "We scaled 4× more clients without hiring. The workflow builder is a lifesaver. What took our team 4 people now runs with just 1 person managing the system.",
      avatar: "RS"
    },
    {
      name: "Dev Patel",
      role: "Startup CEO",
      text: "The analytics dashboard helped us boost CSAT and drastically reduce reply time. We went from 4-hour response times to 4-minute responses, and customer satisfaction increased by 45%.",
      avatar: "DP"
    },
    {
      name: "Sneha Gupta",
      role: "Customer Success Manager",
      text: "Implementing FlowChat WA was the best decision for our support team. Our team can now focus on complex issues while AI handles routine inquiries effortlessly.",
      avatar: "SG"
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Director",
      text: "The ROI was visible within the first month. We saved over 60 hours per week on customer support tasks, allowing us to reinvest in product development.",
      avatar: "RK"
    },
    {
      name: "Priya Nair",
      role: "Marketing Head",
      text: "Conversations that were missed before are now captured automatically. Lead conversion increased by 35% after implementing the WhatsApp automation system.",
      avatar: "PN"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by <span className="gradient-text">teams worldwide</span>
            </h2>
            <p className="text-foreground/70 mt-3 max-w-lg mx-auto">
              Trusted by founders, agencies and businesses globally.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass p-6 rounded-2xl border border-border hover:border-indigo-500/30 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed italic mb-6">"{testimonial.text}"</p>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-foreground/60 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div className="text-center p-6 card-glass rounded-2xl border border-border">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-foreground/70">Customer Satisfaction</p>
          </div>
          <div className="text-center p-6 card-glass rounded-2xl border border-border">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              5000+
            </div>
            <p className="text-foreground/70">Active Businesses</p>
          </div>
          <div className="text-center p-6 card-glass rounded-2xl border border-border">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-foreground/70">Automated Support</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
