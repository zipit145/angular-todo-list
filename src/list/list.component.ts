import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class List implements OnInit {
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
    panelOpenState = false
    toggleComplete(listItem) {
        listItem.isComplete ? listItem.isComplete = false : listItem.isComplete = true
    }
    editItem(listItem) {
        listItem.isComplete ? listItem.isComplete = false : listItem.isComplete = true
    }
    addItem(listItem) {
        listItem.isComplete ? listItem.isComplete = false : listItem.isComplete = true
    }
      
  constructor() { 

  }

  ngOnInit() {
  }

}