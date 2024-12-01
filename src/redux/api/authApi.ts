import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userRegistration: build.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        data: userData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
  overrideExisting: false,
});

export const { useUserRegistrationMutation } = authApi;
