import { Injectable } from '@angular/core';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStashService {



  private stashCollection: CollectionReference<DocumentData> | undefined;
  obsr_UpdatedSnapshot: any;
  db: Firestore;
  stashCol: CollectionReference<DocumentData>;
  updatedSnapshot: any;
  static addStash: any;

  constructor() {
    initializeApp(environment); 
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
function initializeApp(environment: { firebase: { projectId: string; appId: string; storageBucket: string; locationId: string; apiKey: string; authDomain: string; messagingSenderId: string; measurementId: string; }; production: boolean; }) {
  throw new Error('Function not implemented.');
}

