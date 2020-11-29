export const MOCK_CITY = `Brussels`;

export const MOCK_SORTING = `Popular`;

export const MOCK_CURRENT_OFFER = {
  city: {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  rating: 3.8,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: false,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `house`,
  bedrooms: 2,
  price: 200,
  id: 1,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Washer`, `Towels`],
};

export const MOCK_FAVORITE_CURRENT_OFFER_NO_PREMIUM = {
  city: {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  rating: 3.8,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: false,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `house`,
  bedrooms: 2,
  price: 200,
  id: 1,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: true,
  isPremium: false,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Washer`, `Towels`],
};

export const MOCK_FAVORITE_CURRENT_OFFER = {
  city: {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  rating: 3.8,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `house`,
  bedrooms: 2,
  price: 200,
  id: 1,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: true,
  isPremium: true,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Washer`, `Towels`],
};

export const MOCK_OFFERS = [{
  city: {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  rating: 3.8,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `house`,
  bedrooms: 2,
  price: 200,
  id: 1,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Washer`, `Towels`],
},
{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 4.3,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 323,
  id: 2,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Towels`],
},
{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 2,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.862556999999995,
    longitude: 4.375697,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 232,
  id: 14,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `House in countryside`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Breakfast`, `Laptop friendly workspace`],
}];

export const MOCK_OFFERS_FILTERED = [{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 4.3,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 323,
  id: 2,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Towels`],
},
{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 2,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.862556999999995,
    longitude: 4.375697,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 232,
  id: 14,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `House in countryside`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Breakfast`, `Laptop friendly workspace`],
}];

export const MOCK_OFFERS_FILTERED_BY_PRICE_H = [{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 4.3,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 323,
  id: 2,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Towels`],
},
{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 2,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.862556999999995,
    longitude: 4.375697,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 232,
  id: 14,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `House in countryside`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Breakfast`, `Laptop friendly workspace`],
}];

export const MOCK_OFFERS_FILTERED_BY_PRICE_L = [{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 2,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.862556999999995,
    longitude: 4.375697,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 232,
  id: 14,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `House in countryside`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Breakfast`, `Laptop friendly workspace`],
},
{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 4.3,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 323,
  id: 2,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: false,
  isPremium: false,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Towels`],
}];

export const MOCK_FAVORITE_OFFERS = [{
  city: {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  rating: 3.8,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `house`,
  bedrooms: 2,
  price: 200,
  id: 1,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: true,
  isPremium: true,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Washer`, `Towels`],
},
{
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  rating: 4.3,
  host: {
    id: 25,
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  description: `Discover daily local life in city center,
    friendly neighborhood, clandestine casino, karaoke,
    old-style artisans, art gallery and artist studio downstairs.`,
  location: {
    latitude: 50.957361,
    longitude: 6.9509739999999995,
    zoom: 16,
  },
  type: `apartment`,
  bedrooms: 3,
  price: 323,
  id: 2,
  picture: `/img/room.jpg`,
  photos: [`/img/apartment-01.jpg`],
  headline: `The house among olive`,
  isFavorite: true,
  isPremium: true,
  guests: 4,
  offers: [`Laptop friendly workspace`, `Towels`],
}];

export const MOCK_NO_USER = {};

export const MOCK_REVIEWS = [{
  id: 1,
  user: {
    id: 1,
    name: `Angelina`,
    authorAvatar: `img/avatar-angelina.jpg`,
    isSuper: false,
  },
  rating: 5,
  comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good`,
  date: `2020-11-01T13:38:44.752Z`,
},
{
  id: 2,
  user: {
    id: 1,
    name: `Angelina`,
    authorAvatar: `img/avatar-angelina.jpg`,
    isSuper: false,
  },
  rating: 3,
  comment: `The deluxe room was a quite comfortable one with all the adequate facilities`,
  date: `2020-11-01T13:38:44.752Z`,
}];

export const MOCK_USER = {
  id: 1,
  email: `mockgmail9@gmail.com`,
  name: `Angelina`,
  authorAvatar: `img/avatar-angelina.jpg`,
  isSuper: false,
};

export const MOCK_SERVER_USER = {
  "id": 1,
  "email": `mockgmail9@gmail.com`,
  "name": `Angelina`,
  "avatar_url": `img/avatar-angelina.jpg`,
  "is_pro":	false,
};

export const MOCK_GRADES = [0, 1, 2, 3, 4, 5];

export const MOCK_SERVER_HOTEL = {
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatar_url": `img/1.png`,
    "id": 3,
    "is_pro": true,
    "name": `Angelina`
  },
  "id": 1,
  "images": [`img/1.png`, `img/2.png`],
  "is_favorite": false,
  "is_premium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "preview_image": `img/1.png`,
  "price": 120,
  "rating": 4.8,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `apartment`
};

export const MOCK_ADAPTED_HOTEL = {
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "offers": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatar": `img/1.png`,
    "id": 3,
    "isSuper": true,
    "name": `Angelina`
  },
  "id": 1,
  "photos": [`img/1.png`, `img/2.png`],
  "isFavorite": false,
  "isPremium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "guests": 4,
  "picture": `img/1.png`,
  "price": 120,
  "rating": 4.8,
  "headline": `Beautiful & luxurious studio at great location`,
  "type": `apartment`
};

export const MOCK_SERVER_REVIEW = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "date": `2019-05-08T14:13:56.569Z`,
  "id": 1,
  "rating": 4,
  "user": {
    "avatar_url": `img/1.png`,
    "id": 4,
    "is_pro": false,
    "name": `Max`
  }
};

export const MOCK_ADAPTED_REVIEW = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "date": `2019-05-08T14:13:56.569Z`,
  "id": 1,
  "rating": 4,
  "user": {
    "authorAvatar": `img/1.png`,
    "id": 4,
    "isSuper": false,
    "name": `Max`
  }
};

export const MOCK_AUTH_DATA = {
  login: `test@test.ru`,
  password: `123456`,
};

export const MOCK_STATUS_CODE = 1;

export const MOCK_RATING = 3;

export const MOCK_COMMENT = `some text`;
