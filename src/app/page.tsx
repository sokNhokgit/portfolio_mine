import Greeting from "@/components/Sections/Greeting";
import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Contact from "@/components/Sections/Contact";
// import Stories from "@/components/Sections/Stories";

export default function HomePage() {
  return (
    <main className="flex flex-col space-y-0">
      <section className="py-8" id="welcome"><Greeting /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
      {/* <section id="Stories"><Stories /></section> */}
    </main>
  );
}