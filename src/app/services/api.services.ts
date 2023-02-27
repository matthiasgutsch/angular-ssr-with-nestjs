import { Injectable } from '@angular/core';
import {
  HttpBackend,
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  size: number;
  loginError: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  getParams(params: HttpParams, pars: any): HttpParams {

    if (pars.categories) {
      params = params.append('categories', pars.categories);
    }
    if (pars.lang) {
      params = params.append('lang', pars.lang);
    }
    params = params.append('_start', pars.page);
    if (pars.size) {
      params = params.append('per_page', pars.size);
    }
    return params;
  }

  public get_all(pars: any): Observable<any[]> {
    let params = new HttpParams();
    params = this.getParams(params, pars);
    return this.http
      .get<HttpResponse<any[]>>(`${environment.baseUrl}/posts`, {
        observe: 'response',
        params,
      })
      .pipe(
        map((res: any) => {
          this.size =
            res.headers.get('x-wp-total') != null
              ? +res.headers.get('x-wp-total')
              : 0;
          const ts: any = res.body;
          return ts;
        }),
        catchError(this.handleError)
      );
  }

  get_id(id: any, lang: string) {
    return this.http
      .get(`${environment.baseUrl}/posts?slug=` + id + '&lang=' + lang)
      .pipe();
  }

  get_acf_id(id: any, lang: string) {
    return this.http
      .get(`${environment.baseUrl}/posts/id/` + id + '&lang=' + lang)
      .pipe();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
// /api/users
