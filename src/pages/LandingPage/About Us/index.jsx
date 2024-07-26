import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section
      className="px-6 py-32 items-center justify-center w-full mx-auto  md:w-[45rem] lg:w-[55rem] xl:w-[60rem] flex flex-col gap-16"
      id="about-us"
    >
      <div>
        <h2 className="text-4xl font-semibold text-text-primary text-center">
          About Us
        </h2>
      </div>

      <div className="flex  gap-4 md:gap-8 flex-col md:flex-row items-center border-b-2 py-6 md:py-8">
        <div className="w-full flex items-center justify-center flex-col gap-1 ">
          <span className="uppercase text-sm text-text-secondary">Our</span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
            Mission
          </span>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-md text-text-secondary">
            At QuickValide, we empower entrepreneurs by providing the easiest
            and most effective way to validate their SaaS ideas.
          </p>
          <Link
            to="/register"
            className="text-sm text-accent-1 font-bold self-start hover:bg-accent-1 p-2 hover:text-white transition-all"
          >
            Get started &rarr;
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-4 md:gap-8 flex-col-reverse md:flex-row border-b-2 py-6 md:py-8">
        <div className="w-full flex flex-col gap-4">
          <p className="text-md text-text-secondary">
            Founded in 2024, we created QuickValide to simplify the process of
            testing and validating innovative ideas. Our journey began with a
            passion for helping ideas succeed and has grown into a platform
            trusted by numerous entrepreneurs.
          </p>
          <Link
            to="/register"
            className="text-sm text-accent-1 font-bold self-start hover:bg-accent-1 p-2 hover:text-white transition-all"
          >
            Get started &rarr;
          </Link>
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-1">
          <span className="uppercase text-sm text-text-secondary">Our</span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
            Vision
          </span>
        </div>
      </div>

      <div className="flex  gap-4 md:gap-8 flex-col md:flex-row items-center justify-between w-full">
        <div className="w-full flex items-center justify-center flex-col gap-1">
          <span className="uppercase text-sm text-text-secondary">Our</span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
            Values
          </span>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="text-md text-text-secondary w-full">
            <ul className="flex flex-col gap-1">
              <li>
                <span className="font-semibold text-text-primary">
                  Innovation:
                </span>{" "}
                Continuously improving and innovating.
              </li>
              <li>
                <span className="font-semibold text-text-primary">
                  Simplicity:
                </span>{" "}
                Making complex processes simple.
              </li>
              <li>
                <span className="font-semibold text-text-primary">
                  Customer Focus:
                </span>{" "}
                Prioritizing our customers' success.
              </li>
              <li>
                <span className="font-semibold text-text-primary">
                  Integrity:
                </span>{" "}
                Operating with honesty and transparency.
              </li>
            </ul>
          </div>
          <Link
            to="/register"
            className="text-sm text-accent-1 font-bold self-start hover:bg-accent-1 p-2 hover:text-white transition-all"
          >
            Get started &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
