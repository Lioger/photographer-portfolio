import { CHANGE_LANG } from '../actions/texts';
import { texts } from '../utils/texts';

const defaultTexts = texts.find((textsObj) => textsObj.lang === 'en');

export const textsState = (state = defaultTexts, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return texts.find((textsObj) => textsObj.lang === action.payload);
    default:
      return state;
  }
};
