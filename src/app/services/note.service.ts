import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
 
  constructor(private afs: AngularFirestore) { }

  createNote(note: any) {
    return this.afs.collection('note').add(note);
  }

  getNotes() {
    return this.afs.collection('note').snapshotChanges().pipe(
      map(docs => docs.map(doc => {
        const note = doc.payload.doc.data() as any;
        const id = doc.payload.doc.id;

        return { id, ...note }
      }))
    )
  }

  getNote(noteId: string) {
    return this.afs.doc(`note/${noteId}`).snapshotChanges().pipe(
      map(doc => {
        const note = doc.payload.data() as any;
        const id = doc.payload.id;
        return { id, ...note }
      })
    );
  }

  deleteNote(noteId: string) {
    return this.afs.doc(`note/${noteId}`).delete();
  }
  
  updateNote(noteId: string, updatedNote: any) {
    return this.afs.doc(`note/${noteId}`).update(updatedNote);
  }
}
