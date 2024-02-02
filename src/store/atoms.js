import { atom } from 'recoil';

export const situationState = atom({
  key: 'situationState',
  default: 'none',
});

export const songState = atom({
  key: 'songState',
  default: [],
});
