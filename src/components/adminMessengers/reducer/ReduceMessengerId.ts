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
  messenger: SocialTypes;
  error: string;
  isLoading: boolean;
}

export const initialState: SocialState = {
  error: "",
  isLoading: false,
  messenger: {},
} as SocialState;

export const MessengerReducer = createSlice({
  name: "E-mail",
  initialState,
  reducers: {
    MessengerFetching(state) {
      state.isLoading = true;
    },
    MessengerSuccess(state, action: PayloadAction<SocialTypes>) {
      state.isLoading = false;
      state.error = "";
      state.messenger = action.payload;
    },
    MessengerError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default MessengerReducer.reducer;
