const AboutImage = () => {
  return (
    <div className="relative shrink-0 inline-block">

      {/* Shadow offset block */}
      <div className="absolute inset-0 rounded-2xl z-0 translate-x-3 translate-y-3 bg-linear-to-br from-primary to-accent" />

      {/* Image */}
      <img
        src="https://scontent.fkhi3-2.fna.fbcdn.net/v/t39.30808-6/647017844_122265998354212999_2360110414444369653_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeH9meJAhRUPQlDMkteEIb6CiK338Ua1wKmIrffxRrXAqQY4SpcLO7Gf7cGUKka-Qk8A68764m4VVv-xUWcEY8Mc&_nc_ohc=wSYyFiEK7YoQ7kNvwFKyfD7&_nc_oc=AdqrUXXFWUOkqJcDmG1EzvnuBOYwVKTRYDU3X3flhViqA_PzKk9UDutGRMQ1z4y5sbA&_nc_zt=23&_nc_ht=scontent.fkhi3-2.fna&_nc_gid=OyXC28ER3G8HSP7E_8c2Bg&_nc_ss=7a3a8&oh=00_Af3pWHUAT42bjirKmuf7ppPXtReT6T-9ebmA7TK-_DcaRw&oe=69D54985"
        alt="Husnain Ahmad Profile Picture"
        loading="lazy"
        className="relative z-10 rounded-2xl object-cover w-[clamp(330px,30vw,420px)] h-[clamp(290px,32vw,420px)]  border-4 border-bg-section shadow-[0_10px_30px_rgba(5,83,177,0.1)]"
      />

      {/* Experience Badge */}
      <div className="absolute z-20 flex flex-col items-center px-4 py-2 rounded-xl border border-border bg-bg-card shadow-lg bottom-4 right-0">

        <span className="font-bold text-transparent bg-linear-to-br from-primary to-accent bg-clip-text leading-none text-[clamp(1.1rem,2vw,1.5rem)]">
          1+
        </span>

        <span className="font-medium mt-0.5 text-text-muted text-[0.72rem] whitespace-nowrap">
          Years Experience
        </span>

      </div>

    </div>
  );
};

export default AboutImage;