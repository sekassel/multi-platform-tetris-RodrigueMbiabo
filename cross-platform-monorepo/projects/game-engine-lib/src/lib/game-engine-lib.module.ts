import { NgModule } from '@angular/core';
import { BoardComponent } from './components/board/board.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BoardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class GameEngineLibModule { }
