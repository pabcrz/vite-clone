export default function Tags() {
  const tagsItems = [
    { name: "Get Started", emoji: "", mark: true },
    { name: "Why Vite?", emoji: "", mark: false },
    { name: "View on Github", emoji: "", mark: false },
    { name: "viteConf 23!", emoji: "🎉", mark: true },
  ];
  return (
    <>
      {tagsItems.map((tag, i) => {
        return (
          <a
            key={i}
            href="#"
            className="flex items-center px-5 h-10 bg-[#32363F] rounded-3xl "
          >
            {tag.emoji} {tag.name}
          </a>
        );
      })}
    </>
  );
}
