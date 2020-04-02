import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { Item } from 'models/item.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  @Input() nID: string;

  editnoteForm: FormGroup;

  note: Item;

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navParams: NavParams,
              private noteService: NoteService) { }

  ngOnInit() {
    const nID = this.navParams.get('nID');
    this.getNote(nID);
    this.initForm();
  }

  getNote(noteId: string) {
    this.noteService.getNote(noteId).subscribe((note) => {
      this.note=note;
      console.log(note);
      this.patchForm();
    })
  }

  updateNote() {
    const updatedNote = {
      ...this.editnoteForm.value
    };

    this.noteService.updateNote(this.nID, updatedNote).then(() => {
      this.editAlert();
    }).catch((error) => {
      console.log(error)
    });
  }

  patchForm() {
    this.editnoteForm.patchValue({
      descripcion: this.note.descripcion
    })
  }

  initForm() {
    this.editnoteForm = new FormGroup({
      descripcion: new FormControl(null, [Validators.required])
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async editAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success!',
      message: 'Your To-Do has been updated successfully',
      buttons: [
        {
          text: 'OKAY',
          handler: () => {
            this.closeModal();
          }
        }
      ]
    });

    await alert.present();
  }
}
