import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import ContactSection from "@/components/ui/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactSection />
      <Footer />
    </main>
  )
}
