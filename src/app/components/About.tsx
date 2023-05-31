/* eslint-disable react/no-unknown-property */
import { SectionWrapper } from '@app/hoc';
import { services } from '@constants/index';
import { fadeIn, textVariant } from '@utils/motion';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from 'src/style';

type ServiceCardProps = {
  title: string;
  index: number;
  icon: string;
};

const ServiceCard = ({ title, index, icon }: ServiceCardProps) => (
  <Tilt className="mt-2" options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full max-w-[290px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-32 h-32 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center"></h3>
        {title}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('up', 'tween', 0.1, 0.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {/* I&apos;m a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks
        like React, Node.js, and Three.js. I&apos;m a quick learner and collaborate closely with clients to create
        efficient, scalable and user-friendly solution that solve real-world problems. Let&apos;s work together to bring
        your ideas to life! */}
        I&apos;m an experienced software developer with a passion for building robust and scalable applications.
        Proficient in multiple programming languages and frameworks, with a keen eye for detail and a drive for
        continuous learning. I am excited to leverage skills in problem-solving and innovation to contribute to
        cutting-edge software solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
