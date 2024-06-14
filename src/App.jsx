import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  const featuresItems = [
    {
      title: "Instant Server Start",
      description:
        "On demand file serving over native ESM, no bundling required!",
      icon: "💡",
    },
    {
      title: "Lightning Fast HMR",
      description:
        "Hot Module Replacement (HMR) that stays fast regardless of app size.",
      icon: "⚡",
    },
    {
      title: "Rich Features",
      description: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
      icon: "⚒️",
    },
    {
      title: "Optimized Build",
      description:
        "Vite builds for production with Rollup, pre-configured to output highly optimized static assets.",
      icon: "📦",
    },
    {
      title: "Universal Plugins",
      description:
        "Rollup-superset plugin interface shared between dev and build.",
      icon: "🔩",
    },
    {
      title: "Fully Typed APIs",
      description:
        "Flexible programmatic APIs for full control, fully typed with TypeScript.",
      icon: "🔑",
    },
  ];
  return (
    <>
      <Navbar />
      <Title />
      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 px-8">
        {featuresItems.map((feature, i) => {
          return (
            <Card
              key={i}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
