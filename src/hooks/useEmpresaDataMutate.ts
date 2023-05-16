import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { EmpresaData } from '../interface/EmpresaData';

const API_URL = 'http://localhost:8080';

const postData = async (data: EmpresaData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/empresa', data);
    return response;
}

export function useEmpresaDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['empresa-data'])
        }
    })

    return mutate;
}