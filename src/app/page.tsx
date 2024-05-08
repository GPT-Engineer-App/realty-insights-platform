import { AppRouter } from "next/app";
import Index from "./pages/Index";
import Search from "./pages/Search";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <AppRouter>
      <Index path="/" />
      <Search path="/search" />
      <About path="/about" />
      <Contact path="/contact" />
    </AppRouter>
  );
}