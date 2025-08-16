import { useScroll, useSpring, useTransform, motion } from "framer-motion";

export const TracingBeamScrollbar = () => {
  const { scrollYProgress } = useScroll(); // theo dõi scroll toàn trang
  const svgHeight = window.innerHeight;

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <div className="fixed top-0 right-0 h-full w-6 pointer-events-none">
      <svg
        viewBox={`0 0 20 ${svgHeight}`}
        width="20"
        height={svgHeight}
        className="ml-2 block"
        aria-hidden="true"
      >
        <motion.path
          d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
          fill="none"
          stroke="#9091A0"
          strokeOpacity="0.16"
        ></motion.path>
        <motion.path
          d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.25"
        ></motion.path>
        <defs>
          <motion.linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={y1}
            y2={y2}
          >
            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
            <stop stopColor="#18CCFC"></stop>
            <stop offset="0.325" stopColor="#6344F5"></stop>
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  );
};
