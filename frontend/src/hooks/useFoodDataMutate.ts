import axios, { type AxiosPromise } from "axios"
import type { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = await axios.post(API_URL + '/food', data);
    return response;
};

export function useFoodDataMutate(){
    const queryClient= useQueryClient();
    const mutate= useMutation({
    mutationFn: postData,
    retry: 2, /* Quantas vezes tentar antes de mostrar o erro*/
    onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['foodData'] }) /* Invalida a query para que ela seja refetchada e mostre os dados atualizados */
    }
})

return mutate;
}