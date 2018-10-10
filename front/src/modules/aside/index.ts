import { CHANGE_MODE } from './action';

const initialState: AsideMode = {
  mode: 'all'
}

const aside = (state: AsideMode = initialState, action: ChangeModeAction) => {
  switch (action.type) {
    case CHANGE_MODE:
      console.log(action.mode);
      return {
        mode: action.mode
      };
    default:
      return state;
  }
}

export default aside;