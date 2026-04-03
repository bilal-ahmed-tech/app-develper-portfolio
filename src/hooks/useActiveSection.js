import { useState, useEffect, useRef } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const visibleSections = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.current.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        });

        if (visibleSections.current.size > 0) {
          const top = [...visibleSections.current.entries()].reduce((a, b) =>
            a[1] > b[1] ? a : b
          );
          setActiveSection(top[0]);
        }
      },
      {
        threshold: [0.1, 0.3],
        rootMargin: "0px 0px -30% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;