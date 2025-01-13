import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologicoComponent } from './odontologico.component';

describe('OdontologicoComponent', () => {
  let component: OdontologicoComponent;
  let fixture: ComponentFixture<OdontologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdontologicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdontologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
