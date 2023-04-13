import { staggerContainer } from '@utils/motion';
import { motion } from 'framer-motion';
import { styles } from 'src/style';

export const SectionWrapper = (Component: () => JSX.Element, idName?: string) =>
  function Hoc() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-[90rem] mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
