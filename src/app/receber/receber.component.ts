import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.component.html',
  styleUrls: ['./receber.component.css'],
})
export class ReceberComponent implements OnInit {
  @Input() msgRecebe: string;

  constructor() {}

  ngOnInit() {}
}
