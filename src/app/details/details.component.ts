import { Component } from '@angular/core';
import { Set, Theme } from '../app.model';
import { AppStateService } from '../app.state.service';
import { Router } from '@angular/router';
import { AppResourceService } from '../app.resource.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public theme: Theme;
  public selectedSet: Set;
  public favorite: boolean;

  constructor(
    private readonly stateService: AppStateService,
    private readonly resourceService: AppResourceService,
    private readonly router: Router
  ) {
    if (!this.stateService.selectedSet) {
      this.navigateBack();
    }
    this.theme = this.stateService.selectedTheme;
    this.selectedSet = this.stateService.selectedSet;
    this.favorite = this.stateService.favoriteSets.some(favorite => favorite.set_num === this.selectedSet.set_num);
  }

  public toggleFavorite(): void {
    this.favorite = !this.favorite;

    this.favorite ?
      this.stateService.addFavorite(this.selectedSet.set_num) :
      this.stateService.removeFavorite(this.selectedSet.set_num);
  }

  public navigateBack(): void {
    this.router.navigate(['']);
  }
}
