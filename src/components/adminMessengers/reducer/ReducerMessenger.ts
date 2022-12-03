import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SocialTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  url: string;
  social: string;
}

interface SocialState {
  social: SocialTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: SocialState = {
  error: "",
  isLoading: false,
  social: [],
} as SocialState;

export const MessengersReducer = createSlice({
  name: "E-mail",
  initialState,
  reducers: {
    MessengersFetching(state) {
      state.isLoading = true;
    },
    MessengersSuccess(state, action: PayloadAction<SocialTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.social = action.payload;
    },
    MessengersError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default MessengersReducer.reducer;
