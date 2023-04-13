import { BallCanvas } from '@app/components/canvas';
import { SectionWrapper } from '@app/hoc';
import { technologies } from '@constants/index';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }) => (
        <div className="w-28 h-28" key={name}>
          <BallCanvas icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
