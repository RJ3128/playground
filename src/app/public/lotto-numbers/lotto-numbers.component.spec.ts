import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoNumbersComponent } from './lotto-numbers.component';

describe('LottoNumbersComponent', () => {
  let component: LottoNumbersComponent;
  let fixture: ComponentFixture<LottoNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottoNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottoNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
