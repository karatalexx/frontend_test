import axios, { AxiosInstance, AxiosResponse } from 'axios';

const API_URL = 'https://reqres.in/api';

export interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface ApiResponse<T> {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: T
}

const flatData = (response: AxiosResponse<any>) => response.data;

const currentUserId: number = 1;

class UserService {

  private readonly http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: API_URL,
    });
  }

  users() {
    return this.http.get<ApiResponse<User[]>>('users?per_page=15').then(flatData);
  }

  current() {
    return this.http.get<ApiResponse<User[]>>(`users/${currentUserId}`).then(flatData)
  }
}

export default new UserService();