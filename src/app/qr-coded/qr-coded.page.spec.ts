import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrCodedPage } from './qr-coded.page';

describe('QrCodedPage', () => {
  let component: QrCodedPage;
  let fixture: ComponentFixture<QrCodedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCodedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrCodedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
