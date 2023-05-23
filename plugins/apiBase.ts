// import axiosBase, { AxiosRequestConfig } from "axios"

// type Header = {
//     'Content-Type': string
//     'x-api-key'?: string
//     'organization-dev'?: string 
//     Authorization?: string

// }

// // const getApiUrl = () => {

// // }

// const header: Header = {
//     'Content-Type': 'application/json',
//     'x-api-key': process.env.apiKey,
//     'organization-dev': process.env.devApiORG ?? location.hostname,
// }

// export const base = axiosBase.create({

// })

// //generic: <T> khi ta chua xac dinh duoc kieu tham so truyen vao va kieu gia tri tra ve 
// export const apiBase = {
//     get: <T>(url: string, obj?: object) => base.get<T>(url, obj),
//     post: <T>(url: string, obj?: object, config?: AxiosRequestConfig) => base.post<T>(url, obj, config),
//     patch: <T>(url: string, obj?: object) => base.patch<T>(url, obj),
//     put: <T>(url: string, obj?: object) => base.put<T>(url, obj),
//     delete: <T>(url: string, obj: object) => base.delete<T>(url, obj),
// }