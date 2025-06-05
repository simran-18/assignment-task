import logo from "../assets/Logo.png";
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center p-16'>
      <motion.img 
        src={logo} 
        alt="logo" 
        className='h-8' 
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      />
      <motion.h1
        className='font-bold text-4xl py-3'
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        alkye
      </motion.h1>
      <motion.p
        className='text-lightgray'
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        The easiest test you will ever do
      </motion.p>
    </div>
  );
};

export default Header;
