function Feature({ feature }) {
  return (
    <div className="bg-white p-6 rounded-md border-[1px] border-gray-200 flex flex-col gap-4">
      <div className="text-accent-1">
        <img src={feature.icon} alt={feature.title} className="w-14" />
      </div>
      <div className="flex flex-col gap-2 text-md">
        <h3 className="text-lg font-semibold text-text-primary">
          {feature.title}
        </h3>
        <p className="text-text-secondary">{feature.description}</p>
      </div>
    </div>
  );
}

export default Feature;
