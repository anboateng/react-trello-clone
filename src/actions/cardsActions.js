import {Constants} from '.';

export const addCard = (listID, text) => {
  return {
    type: Constants.AddCARD,
    payload: {text, listID},
  };
}
