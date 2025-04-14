import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper bg-[#FFEFDB] border-radius-image">
              <img
                className="object-contain"
                src="/images/projectsImage/bigscoop.jpg"
                alt="Ryde App Interface"
              />
            </div>
            <div className="text-content">
              <h2>BigScoop - Dessert Caffe</h2>
              <p className="text-white-50 md:text-xl">
                A Desert Shop website was developed from the scratch.
                Interactive backend administration dashboard, contact forms etc.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projectsImage/zum-goldenen-kopf.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Zum Goldenen Kopf - hotel</h2>
              <p className="text-white-50 md:text-xl">
                An information website was developed from the scratch for Zum
                Goldenen Kopf - hotel based in Bülach, Switzerland.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#825ce1]">
                <img
                  src="/images/projectsImage/inspire.jpg"
                  alt="inspire hub"
                />
              </div>
              <h2>Inspire Hub - Educational creative academy</h2>
              <p className="text-white-50 md:text-xl">
                Designed a custom dashboard that enabled the company to
                effortlessly track course applicants, providing valuable
                insights at a glance.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#444343]">
                <img
                  src="/images/projectsImage/image_digitplus.jpg"
                  alt="Digitalplusco - Digital Agency"
                />
              </div>
              <h2>Digitalplusco - Digital Agency</h2>
              <p className="text-white-50 md:text-xl">
                Creating an attractive landing page and using a dynamic
                dashboard to add information and blogs, strengthening the
                company's online presence.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffffff]">
                <img
                  src="/images/projectsImage/BMA-project.png"
                  alt="YC Directory App"
                />
              </div>
              <h2>BMA - website for architecture</h2>
              <p className="text-white-50 md:text-xl">
                Designed a custom architecture website to showcase all projects.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#000750]">
                <img
                  src="/images/projectsImage/k-we.png"
                  alt="K-We Management Platform"
                />
              </div>
              <h2>K-We Management Platform</h2>
              <p className="text-white-50 md:text-xl">
                An app built with Wordpress & Bootstrap for a fast,
                user-friendly experience.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
