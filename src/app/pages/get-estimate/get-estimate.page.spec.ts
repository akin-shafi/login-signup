import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetEstimatePage } from './get-estimate.page';

describe('GetEstimatePage', () => {
  let component: GetEstimatePage;
  let fixture: ComponentFixture<GetEstimatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEstimatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetEstimatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
