import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

// import { } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
// import { } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-installations.js"

@Injectable({
  providedIn: 'root'
})
export class FirebaseStashService {

  // db: sewingprojectmanager;
  // stashCol: CollectionReference<DocumentData>;
  // private updatedSnapshot = new Item<QuerySnapshot<DocumentData>>();
  // obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  private stashCollection: CollectionReference<DocumentData> | undefined;
  obsr_UpdatedSnapshot: any;
  db: Firestore;
  stashCol: CollectionReference<DocumentData>;
  updatedSnapshot: any;
  static addStash: any;

  constructor() {
    // initializeApp(environment); // <---Error?
    this.db = getFirestore();
    this.stashCol = collection(this.db, 'stash');

    // Get Realtime Data
    onSnapshot(this.stashCol, (snapshot: any) => {
      this.updatedSnapshot.next(snapshot);
    }, (err: any) => {
      console.log(err);
    })
  }

  async getStash() {
    const snapshot = await getDocs(this.stashCol);
    return snapshot;
  }


  async addStash(name: string, age: string) {
    await addDoc(this.stashCol, {
      name,
      age
    })
    return;
  }

  async deleteStash(docId: string) {
    const docRef = doc(this.db, 'stash', docId)
    await deleteDoc(docRef);
    return;
  }

  async updateStash(docId: string, name: string, age: string) {
    const docRef = doc(this.db, 'stash', docId);
    await updateDoc(docRef, { name, age })
    return;
  }




}
