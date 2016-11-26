import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert'
import { DateTimePage } from '../pages/date-time/date-time'
import { ListPage } from '../pages/list/list'
import { InputSelectPage } from '../pages/input-select/input-select'
import { LoadingPage } from '../pages/loading/loading'
import { ModalPage } from '../pages/modal-page/modal-page'
import { MainModalPage } from '../pages/main-modal/main-modal'
import { TabPage } from '../pages/tab/tab'
import { UsersPage } from '../pages/users/users'
import { UsersInfoPage } from '../pages/users-info/users-info'
import { UsersNewPage } from '../pages/users-new/users-new'
import { UsersEditPage } from '../pages/users-edit/users-edit'
import { Users } from '../providers/users'

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
    ModalPage,
    TabPage,
    UsersPage,
    UsersInfoPage,
    UsersNewPage,
    UsersEditPage
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
    ModalPage,
    TabPage,
    UsersPage,
    UsersInfoPage,
    UsersNewPage,
    UsersEditPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
    { provide: 'REST_URL', useValue: 'http://localhost:3000' }
  ]
})
export class AppModule {}
