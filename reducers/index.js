import { combineReducers } from 'redux';
import { textsState } from './texts';
import { gallerySize } from './gallerySize';

export default combineReducers({
  texts: textsState,
  gallerySize,
});
