import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { EmpresaData } from '../interface/EmpresaData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<EmpresaData[]> => {
    const response = axios.get(API_URL + '/empresa');
    return response;
}

export function useEmpresaData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['empresa-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}