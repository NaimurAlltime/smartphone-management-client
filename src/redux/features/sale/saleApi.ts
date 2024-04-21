import { baseApi } from "@/redux/api/baseApi";
import { TSale } from "@/types/sale.type";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSaleHistory: builder.query({
      query: (historyType) => ({
        url: `/sales?historyType=${historyType}`,
        method: "GET",
      }),
      providesTags: ["smartphone", "sale"],
    }),

    addSaleApi: builder.mutation({
      query: (sale: TSale[]) => ({
        url: "/sales",
        method: "POST",
        body: sale,
      }),
      invalidatesTags: ["smartphone", "sale"],
    }),
  }),
});

export const { useAddSaleApiMutation, useGetSaleHistoryQuery } = saleApi;
