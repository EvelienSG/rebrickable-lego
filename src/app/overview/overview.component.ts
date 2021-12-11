import { Component } from '@angular/core';
import { Set, Theme } from '../app.model';
import { AppResourceService } from '../app.resource.service';
import { AppStateService } from '../app.state.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  public selectedTheme: Theme;
  public legoThemes: Theme[];
  public themeSets: Set[];
  public themesError: boolean;
  public setsError: boolean;

  constructor(
    private readonly resourceService: AppResourceService,
    private readonly stateService: AppStateService,
    private readonly router: Router
  ) {
    this.resourceService.getThemes()
      .pipe(take(1))
      .subscribe( {
        next: data => this.legoThemes = data.results,
        error: () => this.themesError = true
    });
  }

  public setSelectedThemeSets(selectedTheme: Theme): void {
    this.resourceService.getSetsByTheme(selectedTheme.id)
      .pipe(take(1))
      .subscribe({
        next: data => this.themeSets = data.results,
        error: () => this.setsError = true
      });
  }

  public navigateToDetails(selectedSet: Set): void {
    this.stateService.selectedTheme = this.selectedTheme;
    this.stateService.selectedSet = selectedSet;
    this.router.navigate(['/details', selectedSet.set_num]);
  }

  public isFavorite(setId: number): boolean {
    return this.stateService.favoriteSets?.some(set => set.set_num === setId);
  }
}
