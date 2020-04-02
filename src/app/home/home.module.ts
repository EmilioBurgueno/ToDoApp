import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NoteModalPage } from '../modals/note-modal/note-modal.page';
import { RouterModule } from '@angular/router';
import { EditPage } from '../modals/edit/edit.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: HomePage
    }
  ]),
    HomePageRoutingModule,
  ],
  declarations: [HomePage, NoteModalPage, EditPage],
  entryComponents: [NoteModalPage, EditPage]
})
export class HomePageModule {}
