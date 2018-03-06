import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accounts-settings',
  templateUrl: './accounts-settings.component.html',
  styles: []
})
export class AccountsSettingsComponent implements OnInit {

  constructor( private _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarChk();
  }

  cambiarColor(tema: string, link: any) {
    
    this.aplicarChk( link );

    this._ajustes.aplicarTema( tema ); 

  }

  aplicarChk( link: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarChk() {

    let selectores: any = document.getElementsByClassName('selector');
    
    let tema = this._ajustes.ajustes.tema;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }

  }

}
