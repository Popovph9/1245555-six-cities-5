import {FLAT_TYPES, FLAT_OFFERS, FLAT_PHOTOS, CITIES} from "../const";
import {generateId, getRandomIndex, getRandomInteger, getRandomArray} from "./randomize";

const MIN_PRICE = 50;
const MAX_PRICE = 500;

const MIN_RATING = 0;
const MAX_RATING = 5;

const MIN_BEDROOMS = 1;
const MAX_BEDROOMS = 4;

const MIN_GUESTS = 1;
const MAX_GUESTS = 5;

const OFFERS_COUNT = 10;

const REVIEWS_COUNT = 4;

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const AUTHOR_NAME = `Random name`;

const DESCRIPTIONS = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`, `Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`];

const HOST_AVATAR = `img/avatar-angelina.jpg`;
const HOST_NAME = `Angelina`;

const COORDS = [[52.3909553943508, 4.85309666406198], [52.369553943508, 4.85309666406198], [52.3909553943508, 4.929309666406198], [52.3809553943508, 4.939309666406198]];

const generatePicture = () => {
  return FLAT_PHOTOS[getRandomIndex(FLAT_PHOTOS)];
};

const generatePhotos = () => {
  return getRandomArray(FLAT_PHOTOS);
};

const generateType = () => {
  return FLAT_TYPES[getRandomIndex(FLAT_TYPES)];
};

const generatePrice = () => {
  return getRandomInteger(MIN_PRICE, MAX_PRICE);
};

const generateRating = () => {
  return getRandomInteger(MIN_RATING, MAX_RATING);
};

const generateBedroomsCount = () => {
  return getRandomInteger(MIN_BEDROOMS, MAX_BEDROOMS);
};

const generateGuestsCount = () => {
  return getRandomInteger(MIN_GUESTS, MAX_GUESTS);
};

const generateOffers = () => {
  return getRandomArray(FLAT_OFFERS);
};

const generateDate = () => {
  return new Date();
};

const generateReview = () => {
  return {
    authorAvatar: `${AVATAR_URL}/${Math.random()}`,
    authorName: AUTHOR_NAME,
    grade: generateRating(),
    date: generateDate(),
    text: getRandomArray(DESCRIPTIONS),
  };
};

const generateReviews = () => {
  return new Array(getRandomInteger(0, REVIEWS_COUNT)).fill().map(generateReview);
};

const generateCoords = () => {
  return COORDS[getRandomIndex(COORDS)];
};

const generateCity = () => {
  return CITIES[getRandomIndex(CITIES)];
};

const generateFlatOffers = () => {

  return {
    id: generateId(),
    city: generateCity(),
    coords: generateCoords(),
    picture: generatePicture(),
    photos: generatePhotos(),
    headline: `Beautiful studio`,
    description: `Beautiful & luxurious apartment at great location`,
    type: generateType(),
    price: generatePrice(),
    rating: generateRating(),
    bedrooms: generateBedroomsCount(),
    guests: generateGuestsCount(),
    offers: generateOffers(),
    isPremium: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    host: {
      avatar: HOST_AVATAR,
      name: HOST_NAME,
      isSuper: Boolean(getRandomInteger(0, 1)),
    },
    reviews: generateReviews(),
  };
};

export const offersMocks = new Array(OFFERS_COUNT).fill().map(generateFlatOffers);
