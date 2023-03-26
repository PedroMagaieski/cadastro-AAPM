import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() popup: boolean = false

  title = 'cadastro-AAPM';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
