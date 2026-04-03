import { services } from "../../data/data";
import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="bg-bg-section py-16">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeader subtitle="What I Offer" title="My" highlight="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;