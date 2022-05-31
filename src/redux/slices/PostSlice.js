import {createSlice} from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    data: [
      {
        id: 1,
        likeCount: 0,
        imageUrl:
          'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      },
      {
        id: 2,
        likeCount: 0,
        imageUrl:
          'https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
      },
      {
        id: 3,
        likeCount: 0,
        imageUrl:
          'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
    ],
  },
  reducers: {
    likeById: (state, actions) => {
      let likedItem = state.data[actions.payload];
      state.data[actions.payload] = {
        ...likedItem,
        likeCount: likedItem.likeCount + 1,
      };
    },
    dislikeById: (state, actions) => {
      let dislikedItem = state.data[actions.payload];
      if (dislikedItem.likeCount > 0) {
        state.data[actions.payload] = {
          ...dislikedItem,
          likeCount: dislikedItem.likeCount - 1,
        };
      }
    },
    likeAll: (state, actions) => {
      state.data.map((item, index) => {
        state.data[index] = {
          ...item,
          likeCount: item.likeCount + 1,
        };
      });
    },
    dislikeAll: (state, actions) => {
      state.data.map((item, index) => {
        if (item.likeCount > 0) {
          state.data[index] = {
            ...item,
            likeCount: item.likeCount - 1,
          };
        }
      });
    },
    resetAllCount: (state, actions) => {
      state.data.map((item, index) => {
        if (item.likeCount > 0) {
          state.data[index] = {
            ...item,
            likeCount: 0,
          };
        }
      });
    },
  },
});

export const {likeById, dislikeById, likeAll, resetAllCount, dislikeAll} =
  postSlice.actions;

export default postSlice.reducer;
