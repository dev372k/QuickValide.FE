import SetupIcon from "../../../assets/setup.svg";
import TemplateIcon from "../../../assets/template.svg";
import SEOIcon from "../../../assets/seo.svg";
import ClickIcon from "../../../assets/click.svg";
import DomainIcon from "../../../assets/domain.svg";
import LanguageIcon from "../../../assets/language.svg";
import Feature from "./Feature";

const features = [
  {
    id: 1,
    title: "Easy setup",
    icon: SetupIcon,
    description:
      "Launch your landing page quickly without any technical skills.",
  },
  {
    id: 2,
    title: "Pre built templates",
    icon: TemplateIcon,
    description:
      "Choose and customize from a variety of professional templates.",
  },
  {
    id: 3,
    title: "SEO optimization",
    icon: SEOIcon,
    description: "Boost your search engine rankings with built-in SEO tools.",
  },
  {
    id: 4,
    title: "One-Click Publishing",
    icon: ClickIcon,
    description: "Publish your landing page instantly with one click.",
  },
  {
    id: 5,
    title: "Hosting and Domain Options",
    icon: DomainIcon,
    description: "Pick from a range of hosting plans and domain options.",
  },
  {
    id: 6,
    title: "Multi-language Support",
    icon: LanguageIcon,
    description: "Create and manage landing pages in multiple languages.",
  },
];

function Features() {
  return (
    <section
      className="px-6 py-36  bg-section-background w-full flex flex-col gap-8 lg:px-32"
      id="features"
    >
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
