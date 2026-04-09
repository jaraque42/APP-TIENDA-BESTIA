import Hero from "@/components/Hero";
import CollectionLoop from "@/components/CollectionLoop";
import TheLab from "@/components/TheLab";
import Footer from "@/components/Footer";
import catalog from "@/stitch-catalog.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CollectionLoop products={catalog.products} />
      <TheLab />
      <Footer />
    </main>
  );
}
