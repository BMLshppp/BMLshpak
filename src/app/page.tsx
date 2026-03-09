import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Program from "@/components/sections/Program";
import Reviews from "@/components/sections/Reviews";
import Pricing from "@/components/sections/Pricing";
import Urgency from "@/components/sections/Urgency";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F]">
      <Hero />
      <Benefits />
      <Program />
      <Reviews />
      <Pricing />
      <Urgency />
      <Footer />
    </main>
  );
}
