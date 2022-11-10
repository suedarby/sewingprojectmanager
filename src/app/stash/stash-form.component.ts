import { Component, OnInit } from '@angular/core';

import { DocumentData, QuerySnapshot } from '@firebase/firestore';
import { FirebaseStashService } from '../services/firebase-stash.service';

@Component({
  selector: 'app-stash-form',
  templateUrl: './stash-form.component.html',
  styleUrls: ['./stash-form.component.css']
})
export class StashFormComponent implements OnInit {

  stashDetails = {
    itemname	: '',
    images	: '',
    description	: '',
    tags	: '',
    category	: '',
    location	: '',
    store	: '',
    cost	: '',
    url	: '',
    addtoshoppinglist	: '',
    lowstock	: '',
    qty	: '',
  }
  StashCollectiondata: { id: string, name: string, age: string }[] | any = [];

  constructor(private FirebaseStashService: FirebaseStashService) { }

  ngOnInit(): void {
    this.get();
    this.FirebaseStashService.obsr_UpdatedSnapshot.subscribe((snapshot: QuerySnapshot<DocumentData>) => {
      this.updateStashCollection(snapshot);
    })
  }

  async add() {
    const {
      itemname	,
      images	,
      description	,
      tags	,
      category	,
      location	,
      store	,
      cost	,
      url	,
      addtoshoppinglist	,
      lowstock	,
      qty	, } = this.stashDetails;
    await FirebaseStashService.addStash(

   this.stashDetails.itemname=	"",
   this.stashDetails.images	 =	"",
   this.stashDetails.description	 =	"",
   this.stashDetails.tags	 =	"",
   this.stashDetails.category	 =	"",
   this.stashDetails.location	 =	"",
   this.stashDetails.store	 =	"",
   this.stashDetails.cost	 =	"",
   this.stashDetails.url	 =	"",
   this.stashDetails.addtoshoppinglist	 =	"",
   this.stashDetails.lowstock	 =	"",
   this.stashDetails.qty	 =	"",
    );
  }

  async get() {
    const snapshot = await this.FirebaseStashService.getStash();
    this.updateStashCollection(snapshot);
  }

  updateStashCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.StashCollectiondata = [];
    snapshot.docs.forEach((stash) => {
      this.StashCollectiondata.push({ ...stash.data(), id: stash.id });
    })
  }

  async delete(docId: string) {
    await this.FirebaseStashService.deleteStash(docId);
  }

  async update(docId: string, name: HTMLInputElement, age: HTMLInputElement) {
    await this.FirebaseStashService.updateStash(docId, name.value, age.value);
  }

}
