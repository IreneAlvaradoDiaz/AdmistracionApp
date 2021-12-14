import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAnimalesComponent } from './ranking-animales.component';

describe('RankingAnimalesComponent', () => {
  let component: RankingAnimalesComponent;
  let fixture: ComponentFixture<RankingAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingAnimalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
