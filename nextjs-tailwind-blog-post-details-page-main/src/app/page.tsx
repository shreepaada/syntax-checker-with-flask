// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Content from "./content";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />

      <Footer />
    </>
  );
}
