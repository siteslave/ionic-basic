import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello Alert Page');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'สวัสดี!',
      subTitle: 'ยินดีต้อนรับคนชอบ Ionic framework',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'ระบุชื่อ',
      message: "กรุณาระบุชื่อของคุณ",
      inputs: [
        {
          name: 'name',
          placeholder: 'ชื่อ...'
        },
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('คุณคลิกปุ่มยกเลิก');
          }
        },
        {
          text: 'ตกลง',
          handler: data => {
            console.log('ชื่อของคุณคือ ', data.name);
          }
        }
      ]
    });

    prompt.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: 'คุณอยากได้ Galaxy Note 7 หรือไม่?',
      buttons: [
        {
          text: 'อยากได้',
          handler: () => {
            console.log('คุณอยากได้');
          }
        },
        {
          text: 'ไม่',
          handler: () => {
            console.log('คุณไม่อยากได้');
          }
        }
      ]
    });
    confirm.present();
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('คุณชอบมือถือค่ายไหน?');

    alert.addInput({
      type: 'radio',
      label: 'Apple',
      value: 'apple',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Samsung',
      value: 'samsung',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Asus',
      value: 'asus',
      checked: false
    });

    alert.addButton('ยกเลิก');
    alert.addButton({
      text: 'ตกลง',
      handler: data => {
       console.log(data) 
      }
    });
    alert.present();
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('คุณชอบมือถือรุ่นไหน?');

    alert.addInput({
      type: 'checkbox',
      label: 'Galaxy Note 7',
      value: 'note7',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'iPhone 8',
      value: 'iphone8',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Zenfone 3',
      value: 'zenfone3',
      checked: false
    });

    alert.addButton('ยกเลิก');
    alert.addButton({
      text: 'ตกลง',
      handler: data => {
       console.log(data) 
      }
    });
    alert.present();
  }

}
