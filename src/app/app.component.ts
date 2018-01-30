import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {name: "wtf1"},
    {name: "wtf2"},
    {name: "wtf3"},
    {name: "wtf4"}
  ]
}
