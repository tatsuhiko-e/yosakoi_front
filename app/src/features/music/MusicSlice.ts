import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicCardItems: [],
  amount: 0,
  total: 0,
}
const musicCardSlice = createSlice({
  name: "musicCard",
  initialState,
  reducers: {},
});

export default musicCardSlice.reducer;
