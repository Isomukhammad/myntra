import axios from "axios";

const baseAxios = axios.create({ // base Axios instance with common settings
    baseURL: process.env.API,
    headers: {
        Accept: "application/json",
    },
})

export const nextAxios = baseAxios; // nextAxios as a simple Axios instance
export const authAxios = baseAxios; // authAxios as an Axios instance with an auth token