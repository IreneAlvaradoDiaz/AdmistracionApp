import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingUsuariosComponent } from './ranking-usuarios.component';

describe('RankingUsuariosComponent', () => {
  let component: RankingUsuariosComponent;
  let fixture: ComponentFixture<RankingUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
