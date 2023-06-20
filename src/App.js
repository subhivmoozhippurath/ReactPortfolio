import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LoadingPage from "./components/LoadingPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import useReady from "./components/useReady";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const { ready } = useReady(3800);
  return (
    <ChakraProvider>
      <div>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <SocialLinks />
      </div>
    </ChakraProvider>
  );
}

export default App;
