import { Injectable } from '@angular/core';
import { Theme } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppResourceService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getSetsByTheme(themeId: number): Observable<any> {
    return this.httpClient
      .get(`https://rebrickable.com/api/v3/lego/sets/?key=cef91563c41612c871ed256c1a22e628&theme_id=${themeId}`);
  }

  public getThemes(): Observable<any> {
    return this.httpClient
      .get('https://rebrickable.com/api/v3/lego/themes?key=cef91563c41612c871ed256c1a22e628');
  }
}
