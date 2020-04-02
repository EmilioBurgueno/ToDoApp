import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteModalPageRoutingModule } from './note-modal-routing.module';

import { NoteModalPage } from './note-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NoteModalPage]
})
export class NoteModalPageModule {}
