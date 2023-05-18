import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTeamId: '',
  selectedSeasonYear: '',
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setSelectedTeam: (state, action) => {
      state.selectedTeamId = action.payload.selectedTeamId;
      state.selectedSeasonYear = action.payload.selectedSeasonYear;
    },
  },
});

export const { setSelectedTeam } = teamSlice.actions;

export default teamSlice.reducer;
