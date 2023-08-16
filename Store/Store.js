import { createGlobalState } from 'react-hooks-global-state';

const initialState = { 
  player: {
    id: 0,
    name: '',
    hunt: false
  },
  timeUpdate: null,
};

export const { useGlobalState } = createGlobalState(initialState);