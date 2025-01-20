import images from './images';

const wines = [
  {
    title: 'Carlsberg',
    price: '₹190',
    tags: 'Bottle',
  },
  {
    title: 'Simba',
    price: '₹1100',
    tags: 'Bottle',
  },
  {
    title: 'Haywards 500',
    price: '₹200',
    tags: '750 ml',
  },
  {
    title: 'Godfather',
    price: '₹190',
    tags: '750 ml',
  },
  {
    title: 'Zingaroo',
    price: '₹270',
    tags: '750 ml',
  },
];

const cocktails = [
  {
    title: 'Gingerade',
    price: '₹300',
    tags: ' soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹290',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹270',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹300',
    tags: 'Bourbon | Brown sugar ',
  },
  {
    title: 'Negroni',
    price: '₹280',
    tags: 'Gin | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
