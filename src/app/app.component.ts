import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  increments: number[] = [];
  onIntervalFired(num: number) {
    this.increments.push(num);
  }
}
