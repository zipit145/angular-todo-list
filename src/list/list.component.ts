import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class List implements OnInit {
    addNewFormGroup = new FormGroup({
        name: new FormControl(''),
        description: new FormControl('')
    });
    
    listItems = [
        {
            name: "todo1",
            description: "more detail on to do",
            isComplete: false,
        },
        {
            name: "todo2",
            description: "more detail on to do",
            isComplete: true,
        },
    ]
    newItem = {
        name: "",
        description: "",
        isComplete: false,
    }
    update() {

        let newItem = {
            name: this.addNewFormGroup.value.name,
            description:this.addNewFormGroup.value.description,
            isComplete: false
        }
        console.warn(newItem);
        console.warn(this.addNewFormGroup.value);
        this.listItems.push(newItem)
    }
    
    toggleComplete(listItem) {
        listItem.isComplete ? listItem.isComplete = false : listItem.isComplete = true
    }
    editItem(listItem) {
        listItem.isComplete ? listItem.isComplete = false : listItem.isComplete = true
    }
    addItem() {
        console.log("here")
    }
      
  constructor() { 
    
  }

  ngOnInit() {
  }

}