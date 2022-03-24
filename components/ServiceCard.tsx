import { FunctionComponent } from 'react';
import { Service } from '../data/interfaces/service';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, title, about }
}) => {
  const createMarkup = () => ({ __html: about });

  return (
    <div className='flex items-center p-2 space-x-4'>
      <div>
        <Icon className='w-8 h-8 text-rose-600' />
      </div>
      <div>
        <h6 className='font-bold'>{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
