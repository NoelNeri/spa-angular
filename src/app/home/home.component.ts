import { Component, Input, OnInit } from '@angular/core';
import { funcionario } from '../model/funcionario'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela:  boolean = false;

  listaFuncionarios: funcionario[] = [
    { nome: 'João', idade: 37, idNum: 'T818', cargo: 'Cientista de dados' },
    { nome: 'Jussara', idade: 28, idNum: 'T819', cargo: 'Desenvolvedor Front-end' },
    { nome: 'Alex', idade: 42, idNum: 'T113', cargo: 'Scrum Master' },
    { nome: 'Nabuzaraidã', idade: 22, idNum: 'T833', cargo: 'Desenvolvedor Back-end' },
    { nome: 'Antonio', idade: 37, idNum: 'T818', cargo: 'Cientista de dados' },
    { nome: 'Kris', idade: 28, idNum: 'T819', cargo: 'Desenvolvedor Front-end' },
    { nome: 'Vitor', idade: 42, idNum: 'T113', cargo: 'Scrum Master' },
    { nome: 'Otávio', idade: 22, idNum: 'T833', cargo: 'Desenvolvedor Back-end' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'Identificação', 'Cargo'];

  ngOnInit(): void {
    this.valor = 0;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
    this.valor
  }

}