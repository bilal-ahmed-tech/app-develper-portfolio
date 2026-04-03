const BtnPrimary = ({ href, children, download, onClick }) => {
  const classes = `
    inline-flex items-center gap-2 px-7 py-2 
    text-base font-semibold rounded-md text-white

    bg-gradient-to-br from-primary to-accent

    transition-all duration-300

    hover:shadow-[0_6px_20px_rgba(5,83,177,0.35)]
    hover:-translate-y-[1px]

    active:translate-y-[1px]
    active:shadow-[0_3px_10px_rgba(5,83,177,0.25)]
  active:text-white/90
    focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2
  `;

if (href) {
    return (
      <a href={href} download={download} onClick={onClick} className={classes}>
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

export default BtnPrimary;