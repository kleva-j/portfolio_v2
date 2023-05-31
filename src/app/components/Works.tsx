import { SectionWrapper } from '@app/hoc';
import { github } from '@assets/index';
import { projects } from '@constants/index';
import { fadeIn, textVariant } from '@utils/motion';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from 'src/style';

type Unpacked<T> = T extends (infer U)[] ? U : T;

type ProjectCardProps = Unpacked<typeof projects>;

const ProjectCard = (project: ProjectCardProps) => {
  const { name, description, tags, image, source_code_link } = project;

  return (
    <motion.div>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('up', 'tween', 0.1, 0.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world examples of my work. Each prokect is
        briefly described with links to code repositories and live demos in it. It reflects my ability so solve complex
        problems, work with different technologies, and manage projects effectively.
      </motion.p>
      <p className="my-4 text-xl text-center">To be updated</p>
      <div className="mt-20 flex flex-wrap gap-10 blur-md">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
