import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordenacao',
  templateUrl: './coordenacao.component.html',
  styleUrls: ['./coordenacao.component.css']
})
export class CoordenacaoComponent implements OnInit {
  showFiller = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data){
    return true;
  }
}
