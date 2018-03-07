import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 



    this.subscription = this.returnObservable()
       .subscribe( 
      // Cuando se ejecuta observer.next()
      res => console.log('Subs', res),
      // Cuando se ejecuta observer.error()
      error => console.error('Error en el obs', error ),
      // Cuando se ejecuta observer.complete()
      () => console.log('El observador terminó!!')
     );

  }

  ngOnInit() {

  }

  returnObservable(): Observable<any> {
    return  new Observable( observer => {
      
      let contador = 0;  
        let intervalo = setInterval(()=>{
          
          contador += 1;

          let salida = {
            valor: contador
          };
  
          observer.next( salida );
  
          if ( contador === 3 ) {
            clearInterval( intervalo );
            observer.complete();
          }
  
        }, 1000);
  
      })
      .retry(2)
      .map( (resp: any) => {
       return  resp.valor;
      })
      .filter( (valor, index) => {

        console.log('Filter', valor, index);

        if ( valor % 2 === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }

      } );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
