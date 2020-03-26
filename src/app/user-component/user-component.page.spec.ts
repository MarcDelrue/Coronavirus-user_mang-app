import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserComponentPage } from './user-component.page';

describe('UserComponentPage', () => {
  let component: UserComponentPage;
  let fixture: ComponentFixture<UserComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
