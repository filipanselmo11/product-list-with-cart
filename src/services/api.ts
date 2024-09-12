import axios from 'axios';

const baseURL = import.meta.env.VITE_BASEURL;

export const api = axios.create({
    baseURL: baseURL
});