import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName += action.payload
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName += action.payload
    },
    setAge(state, action: PayloadAction<number>) {
      state.age += action.payload
    },
    setWeiight(state, action: PayloadAction<number>) {
      state.weight += action.payload
    }
  }
})

export default userSlice.reducer;