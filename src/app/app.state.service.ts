import { Injectable } from '@angular/core';
import { Theme, Set } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public selectedTheme: Theme;
  public selectedSet: Set;
  public favoriteSets: Set[] = [];

  public removeFavorite(setId: number): void {
    this.favoriteSets = this.favoriteSets.filter(set => set.set_num !== setId);
  }

  public addFavorite(setId: number): void {
    const favoriteSet = this.favoriteSets.find(set => set.set_num === setId);

    if (!favoriteSet) {
      this.favoriteSets.push({
        set_num: setId,
        favorite: true
      });
    }
  }
}
