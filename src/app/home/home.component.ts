/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromocaoService } from 'src/app/home/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private servicoPromocao: PromocaoService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.servicoPromocao.listar()
      .subscribe(
        resposta => {
          // eslint-disable-next-line semi
          console.log(resposta)
        }
      // eslint-disable-next-line semi
      )
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navegarParaBusca(ev: any) {
    this.router.navigate(['busca']);
  }
}
