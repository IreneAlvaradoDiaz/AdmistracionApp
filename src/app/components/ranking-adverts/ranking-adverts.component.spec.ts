import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAdvertsComponent } from './ranking-adverts.component';

describe('RankingUsuariosComponent', () => {
  let component: RankingAdvertsComponent;
  let fixture: ComponentFixture<RankingAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingAdvertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
