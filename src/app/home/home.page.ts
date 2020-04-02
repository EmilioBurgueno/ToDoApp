import { Component, OnInit } from "@angular/core";
import { ModalController, AlertController } from "@ionic/angular";
import { NoteModalPage } from "../modals/note-modal/note-modal.page";
import { Item } from "models/item.model";
import { EditPage } from "../modals/edit/edit.page";
import { NoteService } from "../services/note.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  viewMode = "ToDo";

  today = Date.now();

  Items: Item[] = [];

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private noteService: NoteService
  ) {}

  ngOnInit() {
    this.getNotes();
  }

  // Modal
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: NoteModalPage
    });
    return await modal.present();
  }

  async openModalEdit(noteId: string) {
    const modal = await this.modalCtrl.create({
      component: EditPage,
      componentProps: {
        nID: noteId
      }
    });
    return await modal.present();
  }

  // funciones

  getNotes() {
    this.noteService.getNotes().subscribe(notes => {
      this.Items = notes;
    });
  }

  async Alert(funcion: string) {
    if (funcion === "delete") {
      const alert = await this.alertCtrl.create({
        header: "Success!",
        message: "Your To-Do has been deleted succesfully",
        buttons: ["OKAY"]
      });
      await alert.present();
    } else if (funcion === "tD") {
      const alert = await this.alertCtrl.create({
        header: "Well done!",
        message: "Very good, one more to-do done. Keep going!",
        buttons: ["OKAY"]
      });
      await alert.present();
    } else if (funcion === "dT") {
      const alert = await this.alertCtrl.create({
        header: "No worries!",
        message: "Not done yet?, no problem, keep working on that!",
        buttons: ["OKAY"]
      });
      await alert.present();
    }
  }

  deleteNote(noteId: string) {
    this.noteService
      .deleteNote(noteId)
      .then(() => {
        this.Alert("delete");
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeStatus(noteId: string, noteDes: string, noteEst: string) {
    if (noteEst === "todo") {
      noteEst = "done";
      this.Alert("tD");
    } else {
      noteEst = "todo";
      this.Alert("dT");
    }
    const updatedNote = {
      estado: noteEst,
      descripcion: noteDes
    };
    this.noteService
      .updateNote(noteId, updatedNote)
      .then(() => {
        console.log("Status Changed");
      })
      .catch(error => {
        console.log(error);
      });
  }
}
