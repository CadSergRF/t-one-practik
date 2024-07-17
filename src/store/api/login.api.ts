import { TLoginData, TUserData } from "../../Types/login.type";
import { instantsApi } from "./instants.api";


export const loginApi = instantsApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      TUserData,
      TLoginData
    >({
      query: (loginData) => ({
        url: '/auth/login',
        method: "POST",
        body: loginData,
      }),
    }),
    currentUser: builder.query<
      TUserData,
      string
    >({
      query: (token) => ({
        url: '/auth/me',
        method: "GET",
        headers: {Authorization: `Bearer ${token}`}
      }),
    }),
  }),
});
