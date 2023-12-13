import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { BotaoControleComponent } from "./botao-controle/botao-controle.component";
import { CardBuscaComponent } from "./card-busca/card-busca.component";
import { CardDepoimentoComponent } from "./card-depoimento/card-depoimento.component";
import { CardComponent } from "./card/card.component";
import { ContainerComponent } from "./container/container.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { FooterComponent } from "./footer/footer.component";
import { FormBaseComponent } from "./form-base/form-base.component";
import { CompanhiasComponent } from "./form-busca/filtros-complementares/companhias/companhias.component";
import { FiltrosComplementaresComponent } from "./form-busca/filtros-complementares/filtros-complementares.component";
import { LabelComponent } from "./form-busca/filtros-complementares/label/label.component";
import { ParadasComponent } from "./form-busca/filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./form-busca/filtros-complementares/precos/precos.component";
import { FormBuscaComponent } from "./form-busca/form-busca.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { PassagemDestaqueComponent } from "./passagem-destaque/passagem-destaque.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { SeletorPassageiroComponent } from "./seletor-passageiro/seletor-passageiro.component";
import { CommonModule } from "@angular/common";

// Modulo Funcionalidade
@NgModule ({
declarations: [
  HeaderComponent,
  BannerComponent,
  CardComponent,
  ContainerComponent,
  FooterComponent,
  CardBuscaComponent,
  CardDepoimentoComponent,
  FormBuscaComponent,
  ModalComponent,
  BotaoControleComponent,
  DropdownUfComponent,
  SeletorPassageiroComponent,
  FormBaseComponent,
  PassagemComponent,
  ParadasComponent,
  CompanhiasComponent,
  PrecosComponent,
  LabelComponent,
  FiltrosComplementaresComponent,
  PassagemDestaqueComponent
],
imports: [
  // CommonModule, este modulo ele vai fornecer recursos amplamente utilizado pelo angular
CommonModule
],
exports: [
  // Aqui podemos excolher o que queremos exports
  HeaderComponent,
  BannerComponent,
  CardComponent,
  ContainerComponent,
  FooterComponent,
  CardBuscaComponent,
  CardDepoimentoComponent,
  FormBuscaComponent,
  ModalComponent,
  BotaoControleComponent,
  DropdownUfComponent,
  SeletorPassageiroComponent,
  FormBaseComponent,
  PassagemComponent,
  ParadasComponent,
  CompanhiasComponent,
  PrecosComponent,
  LabelComponent,
  FiltrosComplementaresComponent,
  PassagemDestaqueComponent
]
})

export class SharedModule { }
