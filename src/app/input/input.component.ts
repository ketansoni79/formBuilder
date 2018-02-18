import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public elements = ["p", "input", "button", "textarea"]

  constructor() { }

  ngOnInit() {
  }

  onClick(ele) {
    var div = document.createElement("div")
    div.className = "formElement"
    var element = document.createElement(ele)
    var text = document.createTextNode("new element added")
    element.appendChild(text)
    div.appendChild(element)

    var btn = document.getElementById("form")
    btn.appendChild(div)
  }
}