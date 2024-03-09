import { baseApi } from "@/redux/api/baseApi";
import { TSale } from "@/types/sale.type";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSaleHistory: builder.query({
      query: ({ timeFrame }) => {
        const params = new URLSearchParams();

        if (timeFrame) params.append("timeFrame", timeFrame);

        return {
          url: `/sales?${params}`,
          method: "GET",
        };
      },
      providesTags: ["sale"],
    }),

    addSaleApi: builder.mutation({
      query: (sale: TSale[]) => ({
        url: "/sales",
        method: "POST",
        body: sale,
      }),
      invalidatesTags: ["smartphone"],
    }),
  }),
});

export const { useAddSaleApiMutation, useGetSaleHistoryQuery } = saleApi;
