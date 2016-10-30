import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert'
import { DateTimePage } from '../pages/date-time/date-time'
import { ListPage } from '../pages/list/list'
import { InputSelectPage } from '../pages/input-select/input-select'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    DateTimePage,
    ListPage,
    InputSelectPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertPage,
    DateTimePage,
    ListPage,
    InputSelectPage
  ],
  providers: []
})
export class AppModule {}
