import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 px-8">
        <Features />
      </section>
    </>
  );
}

export default App;
