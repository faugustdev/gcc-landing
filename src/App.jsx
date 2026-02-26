import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Problem from "./sections/Problem"
import HowItWorks from "./sections/HowItWorks"
import Commands from "./sections/Commands"
import Architecture from "./sections/Architecture"
import QuickStart from "./sections/QuickStart"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Commands />
        <Architecture />
        <QuickStart />
      </main>
      <Footer />
    </div>
  )
}
