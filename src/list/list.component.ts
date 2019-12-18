import { Component, OnInit } from '@angular/core';
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
    editFormGroup = new FormGroup({
        name: new FormControl(''),
        description: new FormControl('')
    });
    
    listItems = [
        {
            id: 1,
            name: "Build To Do List for PGI",
            description: "Use Angular 7+, Typescript, Unit Testing, Use Material Angular. Needs to create to dos, mark to dos complete, edit to dos, and add new items to list",
            isComplete: false,
            selected: false
        },
        {
            id: 2,
            name: "Submit To Do List Github",
            description: "Send to James",
            isComplete: true,
            selected: false
        },
    ]
    selectedItem = {
        id: null,
        name: "",
        description: "",
        isComplete: false,
        selected: false
    }

    update() {
        let newItem = {
            id: this.listItems.length+1,
            name: this.addNewFormGroup.value.name,
            description:this.addNewFormGroup.value.description,
            isComplete: false,
            selected: false
        }
        this.listItems.push(newItem)
    }

    selectItem(listItem) {
        if(listItem.selected !== true) {
            this.listItems.map(item => {
                if(item.id !== listItem.id){
                    item.selected = false
                } else {
                    item.selected = true
                    this.selectedItem = item
                }
            })
        }
    }
    deleteItem() {
        if(this.selectedItem.id) {
            let newList = []
            this.listItems.map(item => {
                if(item.id !== this.selectedItem.id){
                    newList.push(item)
                }    
            })
           this.listItems = newList
        } else {
           alert ("please select an item to delete first")
       }
    }    
    
    toggleComplete(listItem) {
        listItem.isComplete ? listItem.isComplete = false : listItem.isComplete = true
    }
    editItem() {
        if(this.selectedItem.id) {
             let newList = this.listItems.map(item => {
                if(item.id === this.selectedItem.id){
                     return item = {
                        id: item.id,
                        name: this.editFormGroup.value.name,
                        description:this.editFormGroup.value.description,
                        isComplete: false,
                        selected: true
                    }
                } else {
                    return item = item
                }
            })
            this.listItems = newList
        } else {
            alert ("please select an item to edit first")
        }
    }
  constructor() { 
    
  }

  ngOnInit() {
  }

}