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
      query: ({
        brand,
        category,
        operatingSystem,
        storageCapacity,
        releaseDate,
        screenSize,
      }) => {
        const params = new URLSearchParams();

        if (brand) params.append("brand", brand);
        if (category) params.append("category", category);
        if (operatingSystem) params.append("operatingSystem", operatingSystem);
        if (storageCapacity) params.append("storageCapacity", storageCapacity);
        if (releaseDate) params.append("releaseDate", releaseDate);
        if (screenSize) params.append("screenSize", screenSize);

        return {
          url: `/smartphones?${params}`,
          method: "GET",
        };
      },
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
