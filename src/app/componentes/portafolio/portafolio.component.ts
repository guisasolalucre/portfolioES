import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  @Output() ventana: string = 'portafolio';

  constructor() { }

  ngOnInit(): void {
  }

}
