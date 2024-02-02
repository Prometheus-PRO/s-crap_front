import { atom } from 'recoil';

export const playListState = atom({
  key: 'playListState',
  default: [1],
});

export const myListState = atom({
  key: 'myListState',
  default: true,
});

export const situationState = atom({
  key: 'situationState',
  default: 'none',
});

export const songState = atom({
  key: 'songState',
  default: [],
});

export const artistState = atom({
  key: 'artistState',
  default: 'none',
});
