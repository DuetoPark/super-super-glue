import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProducts, registProduct } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ["productAll"],
    queryFn: async () => await getAllProducts(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  const addProduct = useMutation({
    mutationFn: ({ userID, data, image, detailImage }) =>
      registProduct(userID, data, image, detailImage),
    onSuccess: () => queryClient.invalidateQueries(["productAll"]),
  });

  return { productsQuery, addProduct };
}
