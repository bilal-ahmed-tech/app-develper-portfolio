const SectionHeader = ({ subtitle, title, highlight, center = true }) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>

      {/* Subtitle */}
      <p className="text-base font-semibold uppercase tracking-widest mb-1 text-primary">
        {subtitle}
      </p>

      {/* Title */}
      <h2 className="text-4xl font-bold leading-tight text-text-heading">
        {title}{" "}
        <span className="bg-linear-to-br from-primary to-accent bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

    </div>
  );
};

export default SectionHeader;