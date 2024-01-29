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
      invalidatesTags: ["smartphone"],
    }),
    getAllSmartphone: builder.query({
      query: () => ({
        url: "/smartphones",
        method: "GET",
      }),
      providesTags: ["smartphone"],
    }),
    deleteSmartphone: builder.mutation({
      query: (id) => ({
        url: `/smartphones/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["smartphone"],
    }),
  }),
});

export const {
  useAddSmartphoneApiMutation,
  useGetAllSmartphoneQuery,
  useDeleteSmartphoneMutation,
} = smartphoneApi;
