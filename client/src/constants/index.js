import { createCampaign, dashboard, profile } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/dashboard',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  
];
