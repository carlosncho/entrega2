import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public  alertController: AlertController, public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'nickname': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })

   }

  ngOnInit() {
  }


  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(usuario.localStorage.getItem('usuario'));

    if (!usuario) {
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'El usuario ingresado no existe, por favor regístrese',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    if(usuario.nickname == f.nickname && usuario.password == f.password){
      console.log("ingresado");
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
    }else{
      const alert= await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingreso son incorrecotos, vuelva intertar',
        buttons: ['Aceptar']
      });
    
      await alert.present();
      return;
    }
  }
}