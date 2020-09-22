import { AuthService } from './../services/auth.service';
import { ModalidadesService } from './../services/modalidades.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Modalidade } from '../models/modalidade'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from './../models/Aluno';

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
  modalidadesNomes = [];
  niveis = [];
  tipos = [];
  dias = [];
  horarios = [];
  matricular = false;
  modalidadeSelecionada: Modalidade = new Modalidade;

  arrayModalidades: Modalidade[] = [
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

  valoresUnicos(value, index, self) {
    return self.indexOf(value) === index;
  }

  constructor(
    private router: Router,
    private service: ModalidadesService,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    console.log(this.auth.autenticado);
    this.carregaTodasModalidades();
  }

  carregaTodasModalidades(){
    this.nivelS = false;
    this.tipoS = false;
    this.diasS = false;
    this.horariosS = false;
    this.modalidadeSelecionada = new Modalidade();
    return this.service.modalidadesNomes().subscribe({
      next: modalidadesServico => {
        this.modalidadesNomes = modalidadesServico;
      }
    });
  }


  carregaNivel(modalidadeSel){
    this.nivelS = false;
    this.tipoS = false;
    this.diasS = false;
    this.modalidadeSelecionada = new Modalidade();
    this.modalidadeSelecionada.modalidade = modalidadeSel;
    return this.service.modalidadesNiveis(this.modalidadeSelecionada).subscribe({
      next: niveisServico => {
        this.niveis = niveisServico;
      },
      complete: () => {
        this.nivelS = true;
      }
    });
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

    return this.service.modalidadesTipos(this.modalidadeSelecionada).subscribe({
      next: tiposServico => {
        this.tipos = tiposServico;
      },
      complete: () => {
        this.tipoS = true;
      }
    });
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

    return this.service.modalidadesDias(this.modalidadeSelecionada).subscribe({
      next: diasServico => {
        this.dias = diasServico;
      },
      complete: () => {
        this.diasS = true;
      }
    });
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

    return this.service.modalidadesHorarios(this.modalidadeSelecionada).subscribe({
      next: horariosServico => {
        console.log(horariosServico)
        this.horarios = horariosServico;
      },
      complete: () => {
        this.horariosS = true;
      }
    });
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
    let dados: Aluno = this.auth.usuario;
    console.table(f.value);
    let dadosEnvio = {
      nome: dados.nome,
      matricula: dados.matricula,
      modalidade: f.value.modalidade,
      nivel: f.value.nivel,
      tipo: f.value.tipo,
      dias: f.value.dias,
      horarios: f.value.horarios,

    }
    return this.service.matricularAluno(dadosEnvio).subscribe({
      complete: () => {
        alert('Matricula realizada com sucesso');
      },
      error: erro => alert('Ocorreu um erro. Tente novamente.')
    });
  }

  sair(){
    this.auth.autenticado = false;
    console.log(this.auth.autenticado);
    this.router.navigate(['/login']);
  }
}
