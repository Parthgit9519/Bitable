import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 overflow-hidden">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="caption small-2 uppercase text-p3"
            >
              The easiest online video maker
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12"
            >
              Amazingly simple
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mb-3 text-2xl text-p2 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-2xl"
            >
              Powered by AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="max-w-440 mb-14 body-1 max-md:mb-10"
            >
              We designed Bitable AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </motion.p>

            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Make a Video</Button>
            </LinkScroll>
          </div>

          {/* HERO IMAGE */}
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <motion.img
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.5,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto will-change-transform"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
