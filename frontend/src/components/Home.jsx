import Hero from "./Hero";
import Posts from "./Posts";
import Section from "./Section";
import Tips from "./Tips";

export default function Home() {

  document.title = "Travel Blog | Home ";
  return (
    <>
      <Hero />
      <Posts />
      <Section />
      <Tips/>
    </>
  );
}
