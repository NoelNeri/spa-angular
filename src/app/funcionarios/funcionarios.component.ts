import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nns-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})

export class FuncionariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 10;

  @Output() valorInicial2: number = this.valorInicial;

}