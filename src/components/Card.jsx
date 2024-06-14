export default function card(feature) {
  return (
    <>
      <div className="flex flex-col rounded-xl bg-[#202127] p-6 gap-3 text-left">
        <span className="p-2 rounded-lg bg-[#2B2F36] text-2xl w-12">
          {feature.icon}
        </span>
        <h3 className="font-semibold">{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </>
  );
}
