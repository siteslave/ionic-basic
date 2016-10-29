import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert'
import { DateTimePage } from '../pages/date-time/date-time'
import { ListPage } from '../pages/list/list'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    DateTimePage,
    ListPage
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
    ListPage
  ],
  providers: []
})
export class AppModule {}
