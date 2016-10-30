import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert'
import { DateTimePage } from '../pages/date-time/date-time'
import { ListPage } from '../pages/list/list'
import { InputSelectPage } from '../pages/input-select/input-select'
import { LoadingPage } from '../pages/loading/loading'
import { ModalPage } from '../pages/modal-page/modal-page'
import { MainModalPage } from '../pages/main-modal/main-modal'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    DateTimePage,
    ListPage,
    InputSelectPage,
    LoadingPage,
    MainModalPage,
    ModalPage
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
    InputSelectPage,
    LoadingPage,
    MainModalPage,
    ModalPage
  ],
  providers: []
})
export class AppModule {}
