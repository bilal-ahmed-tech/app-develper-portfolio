import BtnPrimary from "../ui/BtnPrimary";
import BtnOutline from "../ui/BtnOutline";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center bg-bg-main min-h-[88dvh] py-10"
    >
      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* ── Text Side ── */}
          <div className="text-center lg:text-left lg:max-w-xl">
            <p className="text-base mb-1 text-text-muted">
              I am
            </p>

            <h1 className="font-bold mb-2 text-[clamp(2rem,5vw,4.2rem)] leading-tight">
              <span className="text-text-heading">Husnain </span>
              <span className="bg-linear-to-br from-primary to-accent bg-clip-text text-transparent">
                Ahmad
              </span>
            </h1>

            <h2 className="font-semibold mb-4 text-primary text-[clamp(1rem,2.5vw,1.8rem)]">
              Web & App Developer | Software Engineer
            </h2>

            <p className="leading-relaxed mb-8 text-text-body mx-auto lg:mx-0 max-w-120 text-[clamp(0.9rem,1.5vw,1.05rem)]">
              I build modern, scalable, and high-performance websites and applications 
              tailored for startups and businesses to grow in the digital world. Through clean code and innovative solutions, I help bring ideas to life and drive success in the online space.
            </p>

            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <BtnPrimary href="#contact">Get In Touch</BtnPrimary>
              <BtnOutline href="#projects">View Projects</BtnOutline>
            </div>
          </div>

          {/* ── Image Side ── */}
          <div className="relative shrink-0 inline-block">

            {/* Gradient Ring */}
            <div className="absolute -inset-1.5 rounded-full bg-linear-to-br from-primary to-accent z-0" />

            <img
              src="https://scontent.fkhi3-2.fna.fbcdn.net/v/t39.30808-6/647017844_122265998354212999_2360110414444369653_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeH9meJAhRUPQlDMkteEIb6CiK338Ua1wKmIrffxRrXAqQY4SpcLO7Gf7cGUKka-Qk8A68764m4VVv-xUWcEY8Mc&_nc_ohc=wSYyFiEK7YoQ7kNvwFKyfD7&_nc_oc=AdqrUXXFWUOkqJcDmG1EzvnuBOYwVKTRYDU3X3flhViqA_PzKk9UDutGRMQ1z4y5sbA&_nc_zt=23&_nc_ht=scontent.fkhi3-2.fna&_nc_gid=OyXC28ER3G8HSP7E_8c2Bg&_nc_ss=7a3a8&oh=00_Af3pWHUAT42bjirKmuf7ppPXtReT6T-9ebmA7TK-_DcaRw&oe=69D54985"
              alt="Husnain Ahmad Profile Picture"
              loading="eager"
              className="relative z-10 rounded-full object-cover w-[clamp(280px,30vw,460px)] h-[clamp(280px,30vw,460px)] border-4 border-bg-main"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;