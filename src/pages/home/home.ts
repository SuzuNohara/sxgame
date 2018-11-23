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
      await this.delay(80);
      this.textoActual += texto.charAt(a);
    }
    this.ejecucion = true;
  }

  private delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  contenido: content[] =
    [{
      textos: ['¿Cuál es tu posición sexual favorita?','¿Cómo mujer que te gusta que te digan mientras tienes sexo?','Haz un baile sexi por 20 minutos.','Dame un beso en la parte que quieras de mi cuerpo.','Elige una zona de tu cuerpo donde quieres que pase mi lengua.','Te reto a excitarme con un solo dedo por 10 segundos.','Utiliza mis manos y enséñame como te gusta recibir sexo oral.','Que el de la derecha prepare una bebida para ti. Tiene la libertad de mezclar lo que él o ella guste.','¿A quién de los presentes besarías?  ','¿Lo harías por un trago?','¿Pregunta incomoda o shot?','Bebe tres shots de tequila al hilo','Baila la pelusa, si no lo haces debes beber un mix de tequia y vodka','¿Cuántas drogas has probado?','¿A qué edad probaste las drogas?','¿Has tenido sexo drogado?','¿Qué drogas has probado?','¿Te drogas?'],
      rango: [1,15],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/1b.png?alt=media&token=8efe3db9-9b8c-4e28-98bc-ac6c3aba914a'
    },{
      textos: ['¿Qué parte del cuerpo te gusta más de tu pareja?','¿Qué es lo que te excita?','Quítate 4 prendas que no podrás volver a usar durante el resto del juego.','Pasa tu lengua por mi espalda.','Te reto a que te acuestes con los ojos tapados y dejas que te haga sentir de la mejor manera.','Elige una zona de mi cuerpo para pasar un cubo de hielo.','Dime algo al oído que me haga erizar y estremecer.','Quítate una prenda y bebe lo que queda de tu bebida','¿A qué edad empezaste a tomar?','¿Qué te gusta tomar más?','¿Shot o fondo?','Bebe cerveza entre los pechos de alguna compañera.','Quítale el pantalón al hombre más cercano a ti.','¿Qué drogas prefieres?','¿Te has drogado con desconocidos?','¿Has vendido algo por drogas?','¿Te has drogado con algún familiar?','¿Tienes familiares que se droguen?','¿El consumo de drogas ha afectado tu relación con otras personas?'],
      rango: [16,30],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/2b.png?alt=media&token=40130e9c-ec82-41e3-8449-2d4ef74ef6e1'
    },{
      textos: ['¿Qué piensas cuando ves desnudo al sexo opuesto?','Dime algo que te gustaría intentar sexualmente conmigo.','Menciona 4 palabras que te hacen estallar de placer.','Bésale el pezón a la persona que tienes a tu derecha.','Realiza un trio de 10 minutos con tus mejores amigos(as).','Utiliza cualquier objeto cotidiano como juguete sexual.','Realízale sexo anal a la persona que tienes al frente.','Beben todos menos tú.','Que el de la derecha te dé un pico o bebes 4 shots de tequila.','Beben los que tengan años pares','Todos los que usen algo color negro beben.','Toma un shot sin manos.','Tienes 10 segundos para imitar un animal/artista/ objeto etc., si logran adivinar te tomas shot si no adivinan los demás toman.','¿Te drogaste por encajar en algún lugar o grupo?','¿Te drogaste por alguien o para gustarle a alguien?','¿Te drogaste por problemas?','¿Cuál, cuando y como fue la primera vez que te drogaste?','¿Cuál, cuándo y cómo fue la última vez que te drogaste?'],
      rango: [31,45],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/3b.png?alt=media&token=15ae24e6-1549-43bb-96f5-5d9993020f0a'
    },{
      textos: ['¿Cómo te gusta el sexo? Agresivo o Pasivo','¿Qué te gustaría untarle a un jugador para quitárselo con la boca?','Realiza un beso de lengua de 5 min con una persona de tu mismo sexo.','Quítate una prenda interior frente a todos.','Lame la parte que tú quieras del cuerpo de tu compañero de la izquierda.','Realízale sexo oral durante 10 min a tu mejor amigo(a)','Baila de forma erótica por 1 min.','Semana inglesa en lugar de cachetada, shot.','Tirar un dado, mientras esté girando adivinar qué número saldrá, de no adivinar te tomas la cantidad de shots del dado, de lo contrario repartes los shots.','Ronda de beer pong.','Todos deben ir contando por turnos hasta llegar al 21, si la persona que le toca decir 21 lo dice, toma.','Todos deben tener un vaso a cierta distancia, con una moneda hacerla recortar si no cae dentro del vaso tomas.','Alguien tiene que hacer una pregunta a otro susurrando, esta contesta en voz alta si alguien quiere saber que es, el que hizo la pregunta tiene que tomar.','¿Te drogarías?','¿Qué drogas probarías?','¿Con quién te drogarías?','¿Novio alcohólico o drogadicto?','¿Sexo drogado o borracho?','¿Vendes drogas?'],
      rango: [46,60],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/4b.png?alt=media&token=faf4985e-0e61-4e74-878e-e1a2eed7bbd6'
    },{
      textos: ['Pregúntame que quiero hacerte en este momento.','¿Te gusta que griten o bajen la voz mientras tienes sexo?','Realiza un masaje a la persona que tienes a tu derecha mientras describes una situación sexual perfecta para ti.','Desnúdate frente a todos y usa lencería por 1 hora.','Quítate 4 prendas que no podrás volver a usar durante el resto del juego.','Elige una parte de tu cuerpo para pasarte un cubo de hielo.','Coge las manos de tu compañero(a) de la izquierda y enséñale cómo te gusta que te acaricien.','Se escriben personajes en varios papelitos y tienes que adivinar con preguntas de si y no, con tiempo de 30 segundos si la respuesta es incorrecta tomas. ','En dos vasos colocarán agua o refresco y en otro alguna bebida alcohólica, la persona que esté en turno elige a otra a la cual le tapará los ojos y le dará a escoger uno de los dos vasos.','Se ira contando de uno en uno cuando se llegué a un múltiplo de siete se gritará “Cthulhu” en caso de que no, toma y se inicia otra vez durante dos rondas.','Carachupas presenta nombres de: Relatos de Lovecraft si se repite alguno que ya sé haya dicho o se pasa de tres segundos toma.','Sorbo de shot, el jugador en turno girará alrededor de todos e irá tocando sus cabezas diciendo: “sorbo, sorbo…” hasta que elija quien se tomará el shot, durante dos rondas.','-Se escriben en varios papelitos palabras, cada quien tomará un papel y después tirará un dado sin que nadie vea, si sale par debe decir una historia verdadera y si es impar inventar una, todos tienen que adivinar si es verdadera o falsa. Si adivinan tomas si no toman ellos.','Deberás taparte los ojos y dejar que los demás jugadores hagan un trago especial, que después de beberlo deberás adivinar de que estaba hecho ','¿Shots o toques de marihuana?','¿Beso, shot; o cocaína?','¿Te gustaría tener sexo mientras consumes algún estupefaciente?','¿Droga inyectada, inhalada o fumada?','¿Droga activa o pasiva?','¿Has robado para poder comprar drogas?'],
      rango: [61,75],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/5b.png?alt=media&token=a5cb84c9-67ae-451f-90fa-fc8881d17304'
    },{
      textos: ['¿Te gustaría hacer un trío?','¿Seco, húmedo o mojado?','Haz 20 sentadillas en ropa interior.','Cuéntame en una frase qué sientes cuando te excitas.','Úntale crema batida a tu compañero de enfrente donde quieras y luego cómetela.','Haz una publicación comprometedora en Facebook que involucre a tu mejor amigo(a).','Dile algo al oído a tu compañero de la izquierda que lo haga erizar y estremecer.','Tu compañero de la derecha dirá un número y este constará de cuantos segundos darás de tragó a la botella','Tapate los ojos y di una letra, tu compañero del frente deberá hacerte beber algo que empiece con esa letra','Pídele un trago a un jugador y deberá agregarle un líquido extra (lo que quiera)','Realiza un baile erótico mientras tomas 5 shots','Elige a un jugador y deja que beba alcohol en tus pechos','Toma 7 shots con dos alcoholes diferentes y un líquido externo','Tú y tu compañero de la izquierda deberán hacer un submarino (fumar mientras beben)','¿Qué te gusta de drogarte?','¿Qué no te gusta de drogarte?','¿Marihuana o LSD?','¿Marihuana morada o pelirroja?','¿Drogarte solo o acompañado?','¿Alguna vez has sido detenido o estado en el hospital por consumo de drogas?'],
      rango: [76,90],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/6b.png?alt=media&token=a718c3ee-66f6-49b0-b4a7-702169dfedf5'
    },{
      textos: ['¿Sentado, parado o acostado?','¿Cuál es la parte más sensible de tu cuerpo?','¿Te consideras bueno en la cama?','Hazle una propuesta indecente a tu novio(a)','Déjate maquillar y vestir por tu compañero de la derecha.','Menciona cuatro palabras que te hacen estallar de placer.  ','Tápate los ojos con una venda y que tu compañero de enfrente haga contigo lo que él quiera durante 10 min.','Elige las prendas que quieras del ropero y viste como desees a tu compañero de la derecha.','Unta sal y limón a los labios se una compañera y lámelos hasta que se excite','Mezcla dos o más tipos de alcohol y tomarlo de cabeza','A tu compañero de la izquierda úntale sal y limón en el pezón, prosigue a dejarle caer tequila y lámelo ','Toma alcohol en el ombligo de tu amiga(o)','Toma un sorbo de alcohol y pásalo de boca en boca a todos los jugadores','Todos los jugadores hacen un fondo de 10 segundos','Todos toman una jarra de cerveza, la beberán al mismo tiempo, quien quede en último se quitará frente a todos la prendas intimas ','¿Quieres un porro?','¿Si consumes drogas, crees que te puedas volver adicto?','¿Si tu crush te invitara a que pruebes drogas con él o ella aceptarías?','¿Si tuvieras el poder de drogar a alguien a quien sería?','¿Alguna vez has robado para poder comprar drogas?','¿Has tenido una sobredosis de drogas?'],
      rango: [91,105],
      imagen: 'https://firebasestorage.googleapis.com/v0/b/zzzroot-5726b.appspot.com/o/7b.png?alt=media&token=3fc9eecd-e914-4ca6-a588-58c6b3977650'
    }];
}
