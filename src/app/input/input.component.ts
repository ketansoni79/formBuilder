import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public elements = ["p", "input", "button"]

  constructor() { }

  ngOnInit() {
  }

  onClick(ele){
    var element = document.createElement(ele)
    var text = document.createTextNode("new element added")
    element.appendChild(text)

    var id = document.getElementById("new")
    id.appendChild(element)
    console.log('running')
  }
}