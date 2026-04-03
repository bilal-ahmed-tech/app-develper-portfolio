const ServiceCard = ({ icon, title, desc, features }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl h-full border border-border bg-card-bg transition-all duration-300 cursor-default hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(5,83,177,0.12)] active:-translate-y-2 active:shadow-[0_20px_50px_rgba(5,83,177,0.12)]">

      {/* Top gradient accent (animates on hover) */}
      <div className="absolute top-0 left-0 right-0 h-0.5g-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 origin-left transition-transform duration-300" />

      <div className="p-7">

        {/* Icon */}
        <div className="flex items-center justify-center w-15 h-15 rounded-xl mb-6 bg-primary/10 transition-all duration-300 group-hover:bg-primary/15 group-active:bg-primary/15 group-active:scale-105 group-hover:scale-105">
  <i className={`${icon} text-2xl text-primary transition-colors duration-300`} />
</div>

        {/* Title */}
        <h3 className="font-semibold mb-3 text-text-heading text-[1.1rem] leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-body text-[0.9rem] leading-relaxed mb-5">
          {desc}
        </p>

        {/* Feature List */}
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="relative pl-5 text-text-muted text-[0.88rem]"
            >
              {/* Dot */}
              <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bgbg-linear-to-brrom-primary to-accent" />

              {feature}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ServiceCard;