import Footer from "./Components/Common/Footer";
import NavBar from "./Components/Common/NavBar";
import Home from "./Components/Home";
import About from "./Components/about";
import Projects from "./Sections/Projects";
import Skills from "./Sections/skills";


function App() {

  let handleSections = (value) => {
    let ele = document.getElementById(value);
    console.log(ele);
    window.scrollTo({ top: ele.offsetTop - 95, behavior: "smooth" })
  }
  return (
    <div className="App">

      <NavBar handleSections={handleSections} />
      <Home />
      <About />
      <Skills />
      <Projects />

      <Footer />


    </div>
  );
}

export default App;
