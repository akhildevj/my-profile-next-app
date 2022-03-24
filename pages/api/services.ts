import { NextApiRequest, NextApiResponse } from 'next';
import { services } from '../../data/services';

const getServices = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};

export default getServices;
