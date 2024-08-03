import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProblemaService } from './services/problema.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProblemaService]
})
export class AppComponent implements OnInit{
  title = 'cuentas-frontend';
  problema!: string;
  solution!: number;
  userAnswer!: string;
  feedback!: string;
  isCorrect!: boolean;

  constructor(private problemaService: ProblemaService){ }

  ngOnInit(): void {
    this.obtenerProblema();
  }

  obtenerProblema(): void {
    this.problemaService.getProblema().subscribe(
      (data) => {        
        this.problema = data.problem;
        this.solution = data.result;
        this.feedback = '';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  verificarRespuesta(): void {
    console.log(typeof(this.userAnswer), typeof(this.solution))
    const userAnswerNumber = parseInt(this.userAnswer);

    if (userAnswerNumber === this.solution) {
      this.feedback = '¡Correcto!';
      this.isCorrect = true;
    } else {
      this.feedback = 'Incorrecto, inténtalo de nuevo.';
      this.isCorrect = false;
    }
  }
}
