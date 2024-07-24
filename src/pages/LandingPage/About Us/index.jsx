import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section>
      <div>
        <h2>About Us</h2>
      </div>

      <div>
        <div></div>
        <div>
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            natus quis adipisci, labore fuga necessitatibus assumenda
            consectetur repellat quae quo. Repellat mollitia saepe, ab quasi
            distinctio minus sit voluptatem accusamus debitis quia? Numquam,
            repellendus? Harum neque repellat aut molestias eum.
          </p>
          <Link to="/register">Get started &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
