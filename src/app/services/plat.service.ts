import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PlatService {

   private apiUrl = 'http://localhost:3000/plats';
  //private apiUrl = 'https://my-json-server.typicode.com/houcem-h/public_courses_api/courses';

  constructor(private http: HttpClient) { }

  /**
   * Get all courses
   * @returns Observable<Plat[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a plat with the given id
   * @param id : plat id
   * @returns Observable<Plat>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new plat
   * @param plat new plat to create
   */
  create(plat: any) {
    return this.http.post(this.apiUrl, plat);
  }

  /**
   * Update a plat with the given id
   * @param id plat id to update
   * @param plat new plat data
   */
  update(id: string, plat: any) {
    return this.http.put(this.apiUrl + '/' + id, plat);
  }

  /**
   * Delete a plat with the given id
   * @param id plat id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
