import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { AnimatePresence, motion} from 'framer-motion'

const BackToTop = () => {
    const [atTop, setAtTop] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const homeSection = document.getElementById("home"); // banner
        const contactSection = document.getElementById("contact"); // cuối trang

        if (!homeSection || !contactSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id === "home") {
                        if (entry.isIntersecting) setAtTop(true);
                    }
                    if (entry.target.id === "contact") {
                        if (entry.isIntersecting) setAtTop(false);
                    }
                });
            },
            { threshold: 0.5 } // 50% section trong viewport mới tính là "đang active"
        );

        observer.observe(homeSection);
        observer.observe(contactSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleClick = () => {
        setIsAnimating(true);

        if (atTop) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        //reset animmation after executing
        setTimeout(() => setIsAnimating(false), 800);
    }

   return (
  <motion.div
    className="fixed p-2 bottom-10 end-5 md:bottom-10 md:end-8" 
    transition={{ duration: 3 }}
    whileHover={{ scale: 1.4, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    onClick={handleClick}
  >
    <AnimatePresence mode="wait" initial={false}>
      {atTop ? (
        <motion.div
          key="down"
          initial={{ y: 100, rotate: 0 }}
          animate={
            isAnimating
              ? { y: [0, -20, 200], rotate: [0, -15, 0] }
              : { y: 0, rotate: 0 }
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center 
                     w-8 h-8 sm:w-12 sm:h-12
                     rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 
                     shadow-lg text-black"
        >
          <FaArrowDown size={16} className="sm:size-6" />
        </motion.div>
      ) : (
        <motion.div
          key="up"
          initial={{ y: 0, rotate: 0 }}
          animate={
            isAnimating
              ? { y: [0, 20, -200], rotate: [0, 15, 0] }
              : { y: 0, rotate: 0 }
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center 
                     w-8 h-8 sm:w-12 sm:h-12
                     rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 
                     shadow-lg text-black"
        >
          <FaArrowUp size={16} className="sm:size-6" />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);


};

export default BackToTop;