const ProjectCard = ({ img, badge, title, tags, desc, links }) => {
  return (
    <div className="group rounded-2xl border border-border bg-bg-section overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 active:translate-y-2 active:shadow-[0_16px_40px_rgba(5,83,177,0.12)] hover:shadow-[0_16px_40px_rgba(5,83,177,0.12)]">

      {/* Top Gradient Line */}
      <div className="h-1 w-0 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300 origin-left" />

      {/* Image */}
      <div className="relative overflow-hidden aspect-ratio-16/9">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className={`w-full h-full max-h-36 object-center object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105 ${
            badge === "iOS" || badge === "Android"
              ? "object-contain bg-bg-main"
              : "object-cover"
          }`}
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white bg-linear-to-r from-primary to-accent">
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        {/* Title */}
        <h4 className="font-bold mb-3 text-text-heading text-[1.05rem] group-hover:text-primary group-active:text-primary text-center transition-colors duration-300">
          {title}
        </h4>

        {/* Tags */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-3 min-h-[3.2rem]">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-1 px-3 py-1 rounded-full font-semibold text-[0.8rem] bg-accent-light text-primary"
            >
              {tag.icon && <i className={tag.icon} />}
              {tag.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-text-body text-[0.9rem] leading-relaxed mb-5 flex-1 group-active:text-text-heading group-hover:text-text-heading transition-colors duration-300">
          {desc}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 flex-wrap mt-auto">
          {links.map((link, i) => (
             <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white
              bg-linear-to-r from-primary to-accent
              transition-all duration-300
              hover:shadow-lg hover:shadow-[rgba(5,83,177,0.35)] hover:-translate-y-px
              active:scale-95 active:shadow-md
              focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <i className={link.icon} />
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;