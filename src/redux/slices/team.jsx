import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTeamId: '',
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeamId: (state, action) => {
      state.selectedTeamId = action.payload.selectedTeamId;
    },
  },
});

export const { setTeamId } = teamSlice.actions;

export default teamSlice.reducer;
