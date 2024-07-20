import { instantsApi } from "./instants.api";

import { TLoginData, TUserData } from "../../Types/login.type";

import { expiresToken } from "../../utils/constants/main.constants";

export const loginApi = instantsApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<TUserData, TLoginData>({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...loginData, expiresInMins: expiresToken },
      }),
    }),
    currentUser: builder.query<TUserData, string>({
      query: (token) => ({
        url: "/auth/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});
