import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public alertController: AlertController, private fireStore: FirebaseService) { }

  public allUsers
  public switchState

  ngOnInit() {
    this.allUsers = this.fireStore.getUsers().valueChanges();
    this.fireStore.getSwitchState().valueChanges().subscribe((data: any) => {
      this.switchState = data[0].is_launched
    });
  }

  goToUserEdit(id) {
    this.router.navigate(['/user', id]);
  }

  async deleteUser(user) {
    const alert = await this.alertController.create({
      header: 'Delete ' + user.name,
      message: 'Are you sure you want to <strong>delete ' + user.name + " ?</strong>",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Delete',
          handler: () => {
            this.confirmDeleteUser(user);
          }
        }
      ]
    });

    await alert.present();
  }

  confirmDeleteUser(user) {
    this.fireStore.deleteUser(user);
  }

  switchProgramState() {
    this.fireStore.switchProgramStatus(!this.switchState)
  }
}
