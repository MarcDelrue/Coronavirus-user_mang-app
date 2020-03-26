import { Component, OnInit } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-qr-coded',
  templateUrl: './qr-coded.page.html',
  styleUrls: ['./qr-coded.page.scss'],
})
export class QrCodedPage implements OnInit {

  constructor(private uniqueDeviceID: UniqueDeviceID) { }

  elementType = 'string';
  value: string;

  ngOnInit() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        this.value = uuid
      })
      .catch((error: any) => {
        console.log(error)
      });
  }

}
