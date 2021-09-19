import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.component.html',
  styleUrls: ['./enviar.component.css'],
})
export class EnviarComponent implements OnInit {
  @Output() msg = 'João vItor';

  constructor() {}

  ngOnInit() {}
}
