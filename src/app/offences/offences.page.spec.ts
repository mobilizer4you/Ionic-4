import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffencesPage } from './offences.page';

describe('OffencesPage', () => {
  let component: OffencesPage;
  let fixture: ComponentFixture<OffencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffencesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
