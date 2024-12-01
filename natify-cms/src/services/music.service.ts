import { API } from "../@libs/axios"
import { IMusic } from "../@libs/types";

const _ENDPOINT = '/musics';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IMusic) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IMusic) => (API.put(`${_ENDPOINT}/${id}`, data));
const upload = (file: File) => {
  const formData = new FormData();
  formData.append('file', file)

  return API.post(`${_ENDPOINT}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const MusicService = {
  getAll,
  getById,
  create,
  update,
  remove,
  upload
}