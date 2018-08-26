import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

@Injectable({
  providedIn: 'root'
})
export class FirstpageService {
  private serverURL = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    let specificUrl = this.serverURL + 'productget';
    return this.http.get(specificUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


  post_product(product) {
    console.log("POST SERVICE WORKING!");
    let specificUrl = this.serverURL + 'productpost';
    console.log("URL : " + specificUrl);

    return this.http.post(specificUrl, product, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  


}
