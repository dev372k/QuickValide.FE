import SetupIcon from "../../../assets/setup.svg";
import Feature from "./Feature";

const features = [
  {
    id: 1,
    title: "Easy setup",
    icon: SetupIcon,
    description: "Easy to setup, just design your landing page and get started",
  },
  {
    id: 2,
    title: "Easy setup",
    icon: SetupIcon,
    description: "Easy to setup, just design your landing page and get started",
  },
  {
    id: 3,
    title: "Easy setup",
    icon: SetupIcon,
    description: "Easy to setup, just design your landing page and get started",
  },
  {
    id: 4,
    title: "Easy setup",
    icon: SetupIcon,
    description: "Easy to setup, just design your landing page and get started",
  },
  {
    id: 5,
    title: "Easy setup",
    icon: SetupIcon,
    description: "Easy to setup, just design your landing page and get started",
  },
  {
    id: 6,
    title: "Easy setup",
    icon: SetupIcon,
    description: "Easy to setup, just design your landing page and get started",
  },
];

function Features() {
  return (
    <section className="px-6 py-36 lg:px-48 bg-section-background w-full flex flex-col gap-8">
      <div>
        <h2 className="text-center text-3xl font-semibold text-text-primary">
          Features
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <Feature feature={feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
