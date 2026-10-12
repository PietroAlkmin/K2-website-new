import { Benefits } from "@/components/home/Benefits";
import { Cases } from "@/components/home/Cases";
import { Credibility } from "@/components/home/Credibility";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { JsonLd } from "@/components/seo/JsonLd";
import { faq } from "@/data/home";
import { faqGraph } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqGraph(faq)} />
      <Hero />
      <Credibility />
      <Cases />
      <Solutions />
      <Benefits />
      <Faq />
    </>
  );
}
