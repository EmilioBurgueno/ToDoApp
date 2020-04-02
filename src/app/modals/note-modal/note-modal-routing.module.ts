import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteModalPage } from './note-modal.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: NoteModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteModalPageRoutingModule {}
