import Card from "./card/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
    <main>
      <div className="flex flex-row justify-evenly pt-8">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
    <Footer/>
    </>
  );
}
