import "./App.css"
import React, { useRef } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import CompanyLogo from "./components/CompanyLogo"
import PurposeSection from "./components/PurposeSection"
import FeatureSection from "./components/FeatureSection"
import ScheduleSection from "./components/ScheduleSection"
import Monitor from "./components/Monitor"
import PricingSection from "./components/PricingSection"
import ServiceSection from "./components/ServiceSection"
import TestimonialSection from "./components/TestimonialSection"
import NewsletterSection from "./components/NewsletterSection"
import Footer from "./components/Footer"

function App() {
  const newsletterRef = useRef(null);
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className=" absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10" ></div>
      <div className="overflow-hidden">

        <Nav newsletterRef={newsletterRef} />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeatureSection />
        <ScheduleSection />
        <Monitor />
        <PricingSection />
        <ServiceSection />
        <TestimonialSection />
        <NewsletterSection newsletterRef={newsletterRef} />
        <Footer />


      </div>

    </main>
  )
}

export default App