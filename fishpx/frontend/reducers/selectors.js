import { values } from 'lodash';

export const selectUserPhotos = ({ photos }) => {
  return values(photos).reverse();
};
