import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentDemoComponent } from './moment-demo.component';

describe('MomentDemoComponent', () => {
  let component: MomentDemoComponent;
  let fixture: ComponentFixture<MomentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomentDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
