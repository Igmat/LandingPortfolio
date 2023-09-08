import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Bio } from "./components/Bio";
import { Case } from "./components/Case";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bio />
        <Case />
        <Stats />
      </main>
      <Footer />
    </>
  );
}

export default App;
