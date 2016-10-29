import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert'
import { DateTimePage } from '../pages/date-time/date-time'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    DateTimePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertPage,
    DateTimePage
  ],
  providers: []
})
export class AppModule {}
