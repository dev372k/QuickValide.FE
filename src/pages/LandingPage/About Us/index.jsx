import { Link } from "react-router-dom";
import Mission from "../../../assets/mission.jpg";
import Vision from "../../../assets/vision.jpg";

function AboutUs() {
  return (
    <section className="px-6 py-32 lg:px-32 flex flex-col gap-16" id="about-us">
      <div>
        <h2 className="text-4xl font-semibold text-text-primary text-center">
          About Us
        </h2>
      </div>

      <div className="flex items-start gap-4 md:gap-8 flex-col md:flex-row">
        <div className="w-full">
          <img src={Mission} />
        </div>
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-3xl font-medium text-text-primary">
            Our Mission
          </h3>
          <p className="text-md text-text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            natus quis adipisci, labore fuga necessitatibus assumenda
            consectetur repellat quae quo. Repellat mollitia saepe, ab quasi
            distinctio minus sit voluptatem accusamus debitis quia? Numquam,
            repellendus? Harum neque repellat aut molestias eum.
          </p>
          <Link
            to="/register"
            className="text-sm text-accent-1 font-bold self-start hover:bg-accent-1 p-2 hover:text-white transition-all"
          >
            Get started &rarr;
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-4 md:gap-8 flex-col-reverse md:flex-row">
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-3xl font-medium text-text-primary">Our Vision</h3>
          <p className="text-md text-text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            natus quis adipisci, labore fuga necessitatibus assumenda
            consectetur repellat quae quo. Repellat mollitia saepe, ab quasi
            distinctio minus sit voluptatem accusamus debitis quia? Numquam,
            repellendus? Harum neque repellat aut molestias eum.
          </p>
          <Link
            to="/register"
            className="text-sm text-accent-1 font-bold self-start hover:bg-accent-1 p-2 hover:text-white transition-all"
          >
            Get started &rarr;
          </Link>
        </div>
        <div className="w-full">
          <img src={Vision} />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
