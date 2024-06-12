export default function features() {
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
      {featuresItems.map((feature, i) => {
        return (
          <div
            key={i}
            className="flex flex-col rounded-xl bg-[#202127] p-6 gap-3 text-left"
          >
            <span className="p-2 rounded-lg bg-[#2B2F36] text-2xl w-12">
              {feature.icon}
            </span>
            <h3 className="font-semibold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        );
      })}
    </>
  );
}
