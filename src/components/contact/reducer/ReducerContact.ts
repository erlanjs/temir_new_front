import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmailTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  email: string;
}

interface BankAccountTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  back_account: string | number;
}

interface BankCartTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  back_cart: string | number;
}

interface ContactState {
  email: EmailTypes[];
  bankAcc: BankAccountTypes[];
  bankCart: BankCartTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: ContactState = {
  error: "",
  isLoading: false,
  email: [],
  bankAcc: [],
  bankCart: [],
} as unknown as ContactState;

export const ContactReducer = createSlice({
  name: "Contact",
  initialState,
  reducers: {
    // Email
    EmailFetching(state) {
      state.isLoading = true;
    },
    EmailSuccess(state, action: PayloadAction<EmailTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.email = action.payload;
    },
    EmailError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // // Bank account
    BankAccountFetching(state) {
      state.isLoading = true;
    },
    BankAccountSuccess(state, action: PayloadAction<BankAccountTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.bankAcc = action.payload;
    },
    BankAccountError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // //Bank cart
    BankCardFetching(state) {
      state.isLoading = true;
    },
    BankCardSuccess(state, action: PayloadAction<BankAccountTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.bankAcc = action.payload;
    },
    BankCardError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ContactReducer.reducer;
