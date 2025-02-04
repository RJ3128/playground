import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickListComponent } from './quick-list.component';

describe('QuickListComponent', () => {
  let component: QuickListComponent;
  let fixture: ComponentFixture<QuickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
