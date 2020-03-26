import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { QrCodedPage } from './qr-coded/qr-coded.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers
import { AngularFireDatabaseModule } from '@angular/fire/database'; // pour manipuler la base de données Firebase
import { firebaseConfig } from './credentials';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [AppComponent, QrCodedPage],
  entryComponents: [QrCodedPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    QRCodeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
