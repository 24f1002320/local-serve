import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServiceCategories } from "@/components/service-categories";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServiceCategories />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
