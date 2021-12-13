import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { AppResourceService } from '../app.resource.service';
import { AppStateService } from '../app.state.service';
import { Router } from '@angular/router';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let resourceService: AppResourceService;
  let stateService: AppStateService;
  let router: Router;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
