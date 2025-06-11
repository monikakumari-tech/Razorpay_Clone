import Assisted from "../component/Assisted ";
import Customer from "../component/Customer";
import Hero from "../component/hero/Hero";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div className="m-auto max-w-[2560px] bg-blue-50">
      <main>
        <section>
          <Navbar />
          <Hero />
          <Assisted />
          <Customer />
        </section>
      </main>
    </div>
  );
};
export default Home;
