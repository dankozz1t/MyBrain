import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const defaultWord = {
  id: 'id-1',
  name: 'Apple',
  translate: 'яблуко',
  description: 'fruit and tree',
  image:
    'https://www.pngfind.com/pngs/m/171-1712842_apple-png-clipart-hd-images-of-apple-fruit.png',
};

const fruits = [
  defaultWord,
  {
    id: 'id-2',
    name: 'Banana',
    translate: 'Банан',
    description: 'yellow colors, dick',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/627px-Banana.png',
  },
  {
    id: 'id-3',
    name: 'Lemon',
    translate: 'Лимон',
    description: 'yellow colors',
    image: 'https://freepngimg.com/download/lemon/37410-5-lemon.png',
  },
];

const defaultWordGroups = [
  { id: 'id-1', name: 'fruits', words: fruits },
  {
    id: 'id-2',
    name: 'animal',
    words: [
      {
        id: 'id-1',
        name: 'dog',
      },
      {
        id: 'id-1',
        name: 'cat',
      },
    ],
  },
  { id: 'id-3', name: 'fruits2', words: fruits },
];

const wordGroupsSlice = createSlice({
  name: 'wordGroups',
  initialState: {
    wordGroups: defaultWordGroups,
  },
  reducers: {
    addWordGroups(state, { payload }) {
      state.wordGroups.push(payload);
    },

    deleteWordGroups(state, { payload }) {
      state.wordGroups = state.wordGroups.filter(
        wordGroup => wordGroup.id !== payload
      );
    },
  },
});

const persistConfig = {
  key: 'wordGroups',
  storage,
  whitelist: ['wordGroups'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  wordGroupsSlice.reducer
);

export const { addWordGroups, deleteWordGroups } = wordGroupsSlice.actions;
