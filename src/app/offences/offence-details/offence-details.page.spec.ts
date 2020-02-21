import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffenceDetailsPage } from './offence-details.page';

describe('OffenceDetailsPage', () => {
  let component: OffenceDetailsPage;
  let fixture: ComponentFixture<OffenceDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenceDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffenceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
