import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventCards: [],
  count: 0,
}
const eventCardSlice = createSlice({
  name: "eventCard",
  initialState,
  reducers: {},
});

export default eventCardSlice.reducer;
