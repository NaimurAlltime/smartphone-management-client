import { TSmartPhone } from "../../../types/smartphone";
import { baseApi } from "../../api/baseApi";

const smartphoneApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSmartphoneApi: builder.mutation({
      query: (smartphone: TSmartPhone[]) => ({
        url: "/smartphones",
        method: "POST",
        body: smartphone,
      }),
      //   invalidatesTags: ["all-smartphone"],
    }),
  }),
});

export const { useAddSmartphoneApiMutation } = smartphoneApi;
