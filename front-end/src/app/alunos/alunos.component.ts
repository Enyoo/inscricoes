import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Modalidade } from '../models/modalidade'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  nivelS = false;
  tipoS = false;
  diasS = false;
  horariosS = false;
  niveis = [];
  tipos = [];
  dias = [];
  horarios = [];
  matricular = false;
  modalidadeSelecionada: Modalidade = new Modalidade;

  modalidades = [
    {
      id: 1,
      nome: 'Basquete',
      nivel: 'iniciacao',
      tipo: 'masculino',
      dias: '2A, 4A E 6A',
      horarios: '07H30 - 08H30',
      professor: 'LIVIA LIMA'
    },{
      id: 10,
      nome: 'Basquete',
      nivel: 'aperfeicoamento',
      tipo: 'masculino',
      dias: '2A, 4A E 6A',
      horarios: '07H30 - 08H30',
      professor: 'LIVIA LIMA'
    },
    {
      id: 2,
      nome: 'Vôlei',
      nivel: 3,
      tipo: 'misto',
      dias: '2A, 4A E 6A',
      horarios: '08H30 - 08H30',
      professor: 'NILSON VIEIRA'
    },
    {
      id: 3,
      nome: 'Natação',
      nivel: 2,
      tipo: 'misto',
      dias: '2A, 4A E 6A',
      horarios: '06H30 - 08H30',
      professor: 'MARCOS KAYRO'
    },
    {
      id: 4,
      nome: 'Capoeira',
      nivel: 1,
      tipo: 'misto',
      dias: '2A, 4A E 6A',
      horarios: '06H30 - 08H30',
      professor: 'IZA DE FATIMA'
    },
    {
      id: 5,
      nome: 'Dança',
      nivel: 1,
      tipo: 'feminino',
      dias: '2A, 4A E 6A',
      horarios: '06H30 - 08H30',
      professor: 'IZA DE FATIMA'
    },
    {
      id: 6,
      nome: 'Futsal',
      nivel: 3,
      tipo: 'masculino',
      dias: '2A, 4A E 6A',
      horarios: '06H30 - 08H30',
      professor: 'IZA DE FATIMA'
    },
    {
      id: 7,
      nome: 'Handebol',
      nivel: 2,
      tipo: 'misto',
      dias: '2A, 4A E 6A',
      horarios: '06H30 - 08H30',
      professor: 'IZA DE FATIMA'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  carregaNivel(modalidadeSel){
    if(modalidadeSel == ''){
      this.nivelS = false;
      this.tipoS = false;
      this.diasS = false;
      this.modalidadeSelecionada = new Modalidade();
      return;
    }
    this.modalidadeSelecionada.modalidade = modalidadeSel;

    this.niveis = this.modalidades.filter(function(modalidade){
      if(modalidade.nome == modalidadeSel){
        return modalidade;
      }
    });
    this.nivelS = true;
  }

  carregaTipo(nivelSel){
    if(nivelSel == ''){
      this.tipoS = false;
      this.diasS = false;
      this.modalidadeSelecionada.nivel = null;
      this.modalidadeSelecionada.tipo = null;
      this.modalidadeSelecionada.dias = null;
      this.modalidadeSelecionada.horarios = null;
      return;
    }
    this.modalidadeSelecionada.nivel = nivelSel;
    let modalidadeEscolhida = this.modalidadeSelecionada;

    this.tipos = this.niveis.filter(function(modalidade){
      if( modalidade.nivel == nivelSel &&
          modalidade.nome == modalidadeEscolhida.modalidade
        ){
        return modalidade;
      }
    });
    this.tipoS = true;
  }

  carregaDias(tipoSel){
    if(tipoSel == ''){
      this.diasS = false;
      this.modalidadeSelecionada.tipo = null;
      this.modalidadeSelecionada.dias = null;
      this.modalidadeSelecionada.horarios = null;
      return;
    }

    this.modalidadeSelecionada.tipo = tipoSel;
    let modalidadeEscolhida = this.modalidadeSelecionada;

    this.dias = this.niveis.filter(function(modalidade){
      if( modalidade.tipo == tipoSel &&
          modalidade.nome == modalidadeEscolhida.modalidade &&
          modalidade.nivel == modalidadeEscolhida.nivel
        ){
        return modalidade;
      }
    });
    this.diasS = true;
  }

  carregaHorarios(diasSel){
    if(diasSel == ''){
      this.diasS = false;
      this.modalidadeSelecionada.dias = null;
      this.modalidadeSelecionada.horarios = null;
      return;
    }

    this.modalidadeSelecionada.dias = diasSel;
    let modalidadeEscolhida = this.modalidadeSelecionada;

    this.horarios = this.niveis.filter(function(modalidade){
      if( modalidade.tipo == diasSel &&
          modalidade.nome == modalidadeEscolhida.modalidade &&
          modalidade.nivel == modalidadeEscolhida.nivel &&
          modalidade.dias == modalidadeEscolhida.dias
        ){
        return modalidade;
      }
    });
    this.horariosS = true;
  }


  carregaBotao(horariosSel){
    if(horariosSel == ''){
      this.horariosS = false;
      this.modalidadeSelecionada.horarios = null;
      return;
    }

    this.modalidadeSelecionada.horarios = horariosSel;

    this.matricular = true;
  }

  onSubmit(f: NgForm) {
    console.table(f.value);
  }
}
