import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantpeliculasComponent } from './mantpeliculas.component';

describe('MantpeliculasComponent', () => {
  let component: MantpeliculasComponent;
  let fixture: ComponentFixture<MantpeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantpeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantpeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
