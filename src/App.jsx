import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <CustomCursor />
      {loading && <Loader finishLoading={() => setLoading(false)} />}
      {!loading && (
        <div className="bg-[#08090d] text-white font-sans antialiased min-h-screen selection:bg-[#00f3ff] selection:text-[#08090d]">
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
          <Home scrollToSection={scrollToSection} />
          <Footer scrollToSection={scrollToSection} />
        </div>
      )}
    </>
  );
}

export default App;
