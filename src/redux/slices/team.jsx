import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamId: '',
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeamId: (state, action) => {
      state.teamId = action.payload.teamId;
    },
  },
});

export const { setTeamId } = teamSlice.actions;

export default teamSlice.reducer;
