import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  question!: string;
  answerForm!: FormGroup;
  correctAnswers: number = 0;
  InCorrectAnswers: number = 0;

  ngOnInit() {
    this.generateQuestion();
    this.answerForm = new FormGroup({
      answer: new FormControl('', Validators.required),
    });
  }
  generateQuestion() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    this.question = `${num1} + ${num2} = `;
  }

  validateAnswer(event: Event) {
    event.preventDefault();
    const userAnswer = this.answerForm.value.answer;
    const [num1, num2] = this.question.split('+').map((item) => parseInt(item));
    let correctAnswer = num1 + num2;

    if (parseInt(userAnswer) === correctAnswer) {
      this.correctAnswers += 1;
    } else {
      this.InCorrectAnswers += 1;
    }

    this.answerForm.reset();
    this.generateQuestion();
  }
}
