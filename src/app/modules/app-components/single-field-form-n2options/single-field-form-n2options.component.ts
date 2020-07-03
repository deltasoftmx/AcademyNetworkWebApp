import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-field-form-n2options',
  templateUrl: './single-field-form-n2options.component.html',
  styleUrls: ['./single-field-form-n2options.component.css']
})
export class SingleFieldFormN2optionsComponent implements OnInit {

  @Input('label') label;
  @Input('placeholder') plh;
  @Input('left-btn') lbtn;
  @Input('right-btn') rbtn;
  @Input('type') type;
  @Input('required') isreq:boolean;
  @Input('forward-btn') forward_btn;

  @Output('btn-pressed') btn_pressed: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onclick(event, val, btn) {
    event.preventDefault();

    //Detecta si se presiono la tecla de retorno
    //en lugar de un botón.
    if (event.explicitOriginalTarget.tagName == 'INPUT') {
      btn = 'return';
    }

    //Evitar la ejecución del flujo si el campo es
    //requerido y está vacío.
    if(!val && this.isreq && (btn == this.forward_btn || btn == 'return')) {
      //usar algún servicio de alertas en lugar del alert del navegador.
      alert(`El campo ${this.label} es requerido.`);
      return;
    }

    this.btn_pressed.emit({
      value: val,
      btn: btn
    })
  }

}
