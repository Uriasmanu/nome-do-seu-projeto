import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussaoComponent } from './discussao.component';

describe('DiscussaoComponent', () => {
  let component: DiscussaoComponent;
  let fixture: ComponentFixture<DiscussaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
