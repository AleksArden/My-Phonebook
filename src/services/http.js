import axios from 'axios';

export const publicApi = axios.create({
    baseURL: "http://localhost:8080/api/"
})

export const privatApi = axios.create({
    baseURL: "http://localhost:8080/api/"
})
export const token = {
    set: (token) => {
        privatApi.defaults.headers.Authorization = `Bearer ${token}`;
    },
    remove: () => {
        privatApi.defaults.headers.Authorization = null;
    }
}