"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        else if (value.trim().length < 2) error = "First name must be at least 2 characters";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        else if (value.trim().length < 2) error = "Last name must be at least 2 characters";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Please enter a valid email address";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        else if (value.trim().length < 5) error = "Subject must be at least 5 characters";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send the data to your backend here
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="py-20 bg-card">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Get in Touch
          </h2>
          <p className="text-foreground/70 max-w-lg mx-auto">
            Have questions? Want a personalized demo? Our team responds within 12 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-foreground/70 mb-8">
                We'd love to hear from you. Here's how you can reach us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-foreground/70">divysaxena2402@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-foreground/70">+91 70XXXXXX67</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-foreground mb-4">Business Hours</h4>
              <div className="text-foreground/70 text-sm space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-glass p-8 rounded-2xl border border-border"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a message</h3>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className={`w-full px-4 py-3 rounded-lg bg-background border ${
                      errors.firstName ? "border-red-500" : "border-border"
                    } text-foreground placeholder:text-foreground/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition ${
                      errors.firstName ? "ring-1 ring-red-500/30" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className={`w-full px-4 py-3 rounded-lg bg-background border ${
                      errors.lastName ? "border-red-500" : "border-border"
                    } text-foreground placeholder:text-foreground/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition ${
                      errors.lastName ? "ring-1 ring-red-500/30" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-lg bg-background border ${
                    errors.email ? "border-red-500" : "border-border"
                  } text-foreground placeholder:text-foreground/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition ${
                    errors.email ? "ring-1 ring-red-500/30" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  className={`w-full px-4 py-3 rounded-lg bg-background border ${
                    errors.subject ? "border-red-500" : "border-border"
                  } text-foreground placeholder:text-foreground/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition ${
                    errors.subject ? "ring-1 ring-red-500/30" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your needs..."
                  className={`w-full px-4 py-3 rounded-lg bg-background border ${
                    errors.message ? "border-red-500" : "border-border"
                  } text-foreground placeholder:text-foreground/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition ${
                    errors.message ? "ring-1 ring-red-500/30" : ""
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <MessageCircle className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
