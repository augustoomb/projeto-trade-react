import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamInfo: {},
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeamInfo: (state, action) => {
      state.teamInfo = action.payload.teamInfo;
    },
  },
});

export const { setTeamInfo } = teamSlice.actions;

export default teamSlice.reducer;
