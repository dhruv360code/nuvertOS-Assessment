// axios.service.ts
import { Injectable } from '@angular/core';
import axios, { AxiosResponse, AxiosError } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your API endpoint

  constructor() {}


  // Example GET request
  getData (id: string | null): Promise<any> {
    console.log('ID from URL:', id);
    const url = `${this.apiUrl}/getCompound/${id}`;

    return axios.get(url)
      .then((response: AxiosResponse) => {
        
        console.log(response.data);
        return response.data.data;
      })
      .catch((error: AxiosError) => {
       
        console.error('An error occurred:', error);
        throw error; 
      });
  }

  // Example POST request
  postData(data: any): Promise<any> {
    const url = `${this.apiUrl}/post-endpoint`;

    return axios.post(url, data).then((response: AxiosResponse) => {
      
      return response.data;
    })
    .catch((error: AxiosError) => {
     
      console.error('An error occurred:', error);
      throw error; 
    });
  }


  getAllCompounds(pageNumber: number, pageLimit: number): Promise<any> {
    const url = `${this.apiUrl}/getAllCompounds?page=${pageNumber}&limit=${pageLimit}`;

    return axios.get(url)
      .then((response: AxiosResponse) => {
        
        console.log(response.data);
        return response.data;
      })
      .catch((error: AxiosError) => {
       
        console.error('An error occurred:', error);
        throw error; 
      });
  }

  updateData(data: any): Promise<any> {
    const url = `${this.apiUrl}/updateCompound/${data.id}`;
    let id = data._id;
    delete data.id;
    delete data.createdAt;
    delete data.updatedAt;
    console.log(url);

    console.log('data from updateData:', data);

    return axios.put(url, data).then((response: AxiosResponse) => {
      
      return response.data;
    })
    .catch((error: AxiosError) => {
     
      console.error('An error occurred:', error);
      throw error; 
    });
  }
}