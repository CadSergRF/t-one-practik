import { createSlice } from "@reduxjs/toolkit";
import { TUserData } from "../../Types/login.type";
import { loginApi } from "../api/login.api";

type TUserSlice = {
  userData: TUserData;
  isLoggedIn: boolean;
};

const initialState: TUserSlice = {
  userData: {
    id: undefined,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "",
    refreshToken: "",
  },
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        loginApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.userData.id = payload.id;
          state.userData.firstName = payload.firstName;
          state.userData.lastName = payload.lastName;
          state.isLoggedIn = true;
          localStorage.setItem("token", payload.token);
        }
      )
      .addMatcher(loginApi.endpoints.loginUser.matchRejected, (state) => {
        state.userData.id = undefined;
        state.userData.firstName = "";
        state.userData.lastName = "";
        state.isLoggedIn = false;
        localStorage.removeItem("token");
      })
      .addMatcher(
        loginApi.endpoints.currentUser.matchFulfilled,
        (state, { payload }) => {
          state.userData.id = payload.id;
          state.userData.firstName = payload.firstName;
          state.userData.lastName = payload.lastName;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(loginApi.endpoints.currentUser.matchRejected, (state) => {
        state.userData.id = undefined;
        state.userData.firstName = "";
        state.userData.lastName = "";
        state.isLoggedIn = false;
        localStorage.removeItem("token");
      });
  },
});

export default userSlice.reducer;
