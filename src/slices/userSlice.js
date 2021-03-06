import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  authToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUserData: (state, action) => {
      const data = action.payload;
      console.log(data);
      if (data) {
        state.userData = {
          email: data.email,
          created_at: data.created_at,
          id: data.id,
          full_name: data.full_name,
          org_id: data.org_id,
        };
      }
    },
    setToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});
export const { setUserData, setToken } = userSlice.actions;

export const userSelector = (state) => state.user.userData;
export const tokenSelector = (state) => state.user.authToken;
export const selector = (state) => state;

export default userSlice.reducer;
