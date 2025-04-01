import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusInstallationComponent } from './status-installation.component';

describe('StatusInstallationComponent', () => {
  let component: StatusInstallationComponent;
  let fixture: ComponentFixture<StatusInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusInstallationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
