import { createCampaign, dashboard, logout, payment, profile, withdraw,book1,environment,health,humanitarian,personal,social,tech,wildlife,others } from '../assets';

export const navlinks = [
  
  {
    name: 'book1',
    imgUrl: book1,
    link: '/book1',
    title:'book1',
    toolTipText:'Education and Learning'
  },
  {
    name: 'environment',
    imgUrl: environment,
    link: '/environment',
    toolTipText:'Environmental Causes'
  },
  {
    name: 'health',
    imgUrl: health,
    link: '/health',
    toolTipText:'Health and Medical Expenses'
  },
  {
    name: 'humanitarian',
    imgUrl: humanitarian,
    link: '/humanitarian',
    toolTipText:'Humanitarian Aid '
  },
  {
    name: 'personal',
    imgUrl: personal,
    link: '/personal',
    toolTipText:'Personal and Family Needs'
  },
  {
    name: 'social',
    imgUrl: social,
    link: '/social',
    toolTipText:'Social Causes and Activism'
  },
  {
    name: 'tech',
    imgUrl: tech,
    link: '/tech',
    toolTipText:'Technology and Innovation'
  },
  {
    name: 'wildlife',
    imgUrl: wildlife,
    link: '/wildlife',
    toolTipText:'Wildlife Conservation'
  },
  {
    name: 'others',
    imgUrl: others,
    link: '/others',
    toolTipText:'Others'
  },
  
];
