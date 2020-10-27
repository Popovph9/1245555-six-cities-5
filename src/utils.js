import moment from "moment";

export const getRating = (rating, width) => {
  return Math.round(rating * width);
};

export const getReviewFormatDate = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

export const getReviewDate = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
