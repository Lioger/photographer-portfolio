import { OPEN_GALLERY, CLOSE_GALLERY } from '../actions/gallerySize';

export const gallerySize = (state = 0, action) => {
  switch (action.type) {
    case OPEN_GALLERY:
      return 1;
    case CLOSE_GALLERY:
      return 0;
    default:
      return state;
  }
};
