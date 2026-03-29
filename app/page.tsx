import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ClientLogos />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <BlogPosts />
      </main>
      <Footer />
    </>
  );
}
