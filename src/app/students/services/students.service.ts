import { Students } from './../students.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentsService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  url = 'api/students';
  constructor(
    private http: Http
  ) { }

  getStudents(): Observable<Students[]> {
    return this.http.get(this.url)
      .map((student: Response) => {
        return student.json().data
          .map((data: Students) => {
            return Students.createInstance(data.id, data.fullname, data.photo,
              data.grade1, data.grade2, data.grade3, data.grade4, data.grade5, data.average, data.infoupdated);
          })
      })
  }

  // getStudent(id: number): Promise<Students> {
  //   const url = `${this.url}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Students)
  //     .catch(this.handleError);
  // }

  createStudent(student): Promise<Students> {
    return this.http
      .post(this.url, JSON.stringify(
        {
          id: null,
          fullname: student.fullname,
          photo: student.photo,
          grade1: student.grade1,
          grade2: student.grade2,
          grade3: student.grade3,
          grade4: student.grade4,
          grade5: student.grade5,
          infoupdated: student.infoupdated
        }),
      { headers: this.headers }
      )
      .toPromise()
      .then(res => res.json().data as Students)
      .catch(this.handleError)

  }
  updateStudent(student: Students): Promise<Students> {
    const url = `${this.url}/${student.id}`;

    return this.http
      .put(url, JSON.stringify(student), { headers: this.headers })
      .toPromise()
      .then(() => student)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
