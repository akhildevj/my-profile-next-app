import { FunctionComponent } from 'react';
import { Skill } from '../data/interfaces/skill';

const SkillCard: FunctionComponent<{ skill: Skill }> = ({
  skill: { Icon, name }
}) => {
  return (
    <div className='flex items-center px-4 py-1 my-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600'>
      <Icon className='w-8 h-8 mr-3 text-white' />
      <div>
        <h6 className='font-bold text-white'>{name}</h6>
      </div>
    </div>
  );
};

export default SkillCard;
