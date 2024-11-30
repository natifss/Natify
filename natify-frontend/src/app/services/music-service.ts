import { API } from "../@libs/axios";
import { IMusic } from "../@libs/types";


const _ENDPOINT = '/movies';

const getMusics = async (): Promise<IMusic[]> => {
    const { data } = await API.get(_ENDPOINT)
    return data;
}

const getMusicsById = async (id: string): Promise<IMusic> => {
    const { data } = await API.get(`${_ENDPOINT}/${id}`)
    return data;
}

const getByCategoryId = async (id: number): Promise<[]> => {
    const { data } = await API.get(`${_ENDPOINT}/?categoryId=${id}`)
    return data;
}

export const MusicsService = {
    getMusics,
    getMusicsById,
    getByCategoryId
}