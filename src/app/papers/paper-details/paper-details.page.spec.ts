import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaperDetailsPage } from './paper-details.page';

describe('PaperDetailsPage', () => {
  let component: PaperDetailsPage;
  let fixture: ComponentFixture<PaperDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaperDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
