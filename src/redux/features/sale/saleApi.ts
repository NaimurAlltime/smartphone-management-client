import { baseApi } from "@/redux/api/baseApi";
import { TSale } from "@/types/sale.type";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSaleApi: builder.mutation({
      query: (sale: TSale[]) => ({
        url: "/sales",
        method: "POST",
        body: sale,
      }),
      invalidatesTags: ["sale"],
    }),
  }),
});

export const { useAddSaleApiMutation } = saleApi;
