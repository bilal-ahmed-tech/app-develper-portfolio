const BtnOutline = ({ href, children, onClick }) => {
  const classes = `
    inline-flex items-center gap-2 px-7 py-2.5 
    text-sm font-semibold rounded-md

    border-2 border-primary text-primary bg-transparent

    transition-all duration-300

    hover:bg-primary hover:text-white hover:-translate-y-[1px]

    active:translate-y-[1px]
    active:bg-primary/90
  active:text-white
    focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2
  `;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default BtnOutline;