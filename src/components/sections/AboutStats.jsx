const stats = [
  { num: "3+", label: "Projects Done" },
  { num: "1+", label: "Happy Clients" },
  { num: "100%", label: "On Time Delivery" },
];

const AboutStats = () => {
  return (
    <div className="flex gap-8 flex-wrap mt-2">

      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">

          {/* Number */}
          <span className="font-bold leading-none text-transparent bg-linear-to-br from-primary to-accent bg-clip-text text-[clamp(1.7rem,3vw,2.8rem)]">
            {stat.num}
          </span>

          {/* Label */}
          <span className="font-medium mt-1 text-text-muted text-[0.82rem]">
            {stat.label}
          </span>

        </div>
      ))}

    </div>
  );
};

export default AboutStats;