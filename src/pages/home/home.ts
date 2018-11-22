import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  textoActual: string;
  casilla: number = null;
  opacidad: number;
  nivel: number;
  cardClass: string;
  ejecucion: boolean;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.cardClass = 'card card7';
    this.opacidad = 1;
    this.ejecucion = true;
  }

  mostrarTexto(){
    this.ejecucion = false;
    let texto: string = "";
    if(this.casilla || !isNaN(this.casilla)){
      for(let i = 0; i < this.contenido.length; i++){
        if(!texto){
          if(this.casilla >= this.contenido[i].rango[0] && this.casilla <= this.contenido[i].rango[1]){
            texto = this.contenido[i].textos[Math.floor(Math.random()*(this.contenido[i].textos.length))];
            this.nivel = i + 1;
          }
        }
      }
      if(texto){
        this.showText(texto);
      }else{
        this.ejecucion = true;
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'La casilla seleccionada no existe!',
          buttons: ['OK']
        });
        alert.present();
      }
    }else{
      this.ejecucion = true;
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'No has selecdcionado en que casilla has caido!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  async showText(texto: string){
    this.textoActual = "";
    for(let a = 100; a > 0; a--){
      await this.delay(10);
      this.opacidad = a * 0.01;
    }
    this.cardClass = 'card card' + this.nivel;
    for(let a = 1; a < 100; a++){
      await this.delay(10);
      this.opacidad = a * 0.01;
    }
    for(let a = 0; a < texto.length; a++){
      await this.delay(100);
      this.textoActual += texto.charAt(a);
    }
    this.ejecucion = true;
  }

  private delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  contenido: content[] =
    [{
      textos: ['texto 1.1', 'texto 1.2', 'texto 1.3', 'texto 1.4','texto 1.5', 'texto 1.6', 'texto 1.7', 'texto 1.8','texto 1.9', 'texto 1.10', 'texto 1.11', 'texto 1.12','texto 1.13', 'texto 1.14', 'texto 1.15'],
      rango: [1,15],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/1b.png?alt=media&token=8efe3db9-9b8c-4e28-98bc-ac6c3aba914a'
    },{
      textos: ['texto 2.1', 'texto 2.2', 'texto 2.3', 'texto 2.4','texto 2.5', 'texto 2.6', 'texto 2.7', 'texto 2.8','texto 2.9', 'texto 2.10', 'texto 2.11', 'texto 2.12','texto 2.13', 'texto 2.14', 'texto 2.15'],
      rango: [16,30],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/2b.png?alt=media&token=40130e9c-ec82-41e3-8449-2d4ef74ef6e1'
    },{
      textos: ['texto 3.1', 'texto 3.2', 'texto 3.3', 'texto 3.4','texto 3.5', 'texto 3.6', 'texto 3.7', 'texto 3.8','texto 3.9', 'texto 3.10', 'texto 3.11', 'texto 3.12','texto 3.13', 'texto 3.14', 'texto 3.15'],
      rango: [31,45],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/3b.png?alt=media&token=15ae24e6-1549-43bb-96f5-5d9993020f0a'
    },{
      textos: ['texto 4.1', 'texto 4.2', 'texto 4.3', 'texto 4.4','texto 4.5', 'texto 4.6', 'texto 4.7', 'texto 4.8','texto 4.9', 'texto 4.10', 'texto 4.11', 'texto 4.12','texto 4.13', 'texto 4.14', 'texto 4.15'],
      rango: [46,60],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/4b.png?alt=media&token=faf4985e-0e61-4e74-878e-e1a2eed7bbd6'
    },{
      textos: ['texto 5.1', 'texto 5.2', 'texto 5.3', 'texto 5.4','texto 5.5', 'texto 5.6', 'texto 5.7', 'texto 5.8','texto 5.9', 'texto 5.10', 'texto 5.11', 'texto 5.12','texto 5.13', 'texto 5.14', 'texto 5.15'],
      rango: [61,75],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/5b.png?alt=media&token=a5cb84c9-67ae-451f-90fa-fc8881d17304'
    },{
      textos: ['texto 6.1', 'texto 6.2', 'texto 6.3', 'texto 6.4','texto 6.5', 'texto 6.6', 'texto 6.7', 'texto 6.8','texto 6.9', 'texto 6.10', 'texto 6.11', 'texto 6.12','texto 6.13', 'texto 6.14', 'texto 6.15'],
      rango: [76,90],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/6b.png?alt=media&token=a718c3ee-66f6-49b0-b4a7-702169dfedf5'
    },{
      textos: ['texto 7.1', 'texto 7.2', 'texto 7.3', 'texto 7.4','texto 7.5', 'texto 7.6', 'texto 7.7', 'texto 7.8','texto 7.9', 'texto 7.10', 'texto 7.11', 'texto 7.12','texto 7.13', 'texto 7.14', 'texto 7.15'],
      rango: [91,105],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/7b.png?alt=media&token=3fc9eecd-e914-4ca6-a588-58c6b3977650'
    }];
}
