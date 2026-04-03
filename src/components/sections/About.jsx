import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";
import SectionHeader from "../ui/SectionHeader";
import BtnPrimary from "../ui/BtnPrimary";

const About = () => {
  return (
    <section id="about" className="bg-bg-section py-16">
      <div className="max-w-6xl mx-auto px-5">

        <div className="flex flex-col lg:flex-row items-center gap-14 justify-between">

          {/* Image */}
          <AboutImage />

          {/* ── Text Side ── */}
          <div className="lg:max-w-lg text-center lg:text-left">

            <SectionHeader
              subtitle="Get To Know"
              title="About"
              highlight="Us"
              center={false}
            />

            <p className="leading-loose mb-3 text-text-body text-[clamp(0.85rem,1.5vw,1rem)]">
              I am a passionate software engineer focused on building modern,
              responsive, and high-performance web and mobile applications.
              My goal is to transform ideas into scalable digital products
              that help businesses grow online.
            </p>

            <p className="leading-loose mb-6 text-text-body text-[clamp(0.85rem,1.5vw,1rem)]">
              I am currently available for new projects. Whether you
              need a landing page, a business website, or a custom web
              application — I deliver clean, efficient, and production-ready
              solutions tailored to your needs.
            </p>

            <AboutStats />

            <div className="mt-8">
              <BtnPrimary href="files/Bilal-CV.pdf" download>
                <i className="fa-solid fa-download" /> Download My Profile
              </BtnPrimary>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;