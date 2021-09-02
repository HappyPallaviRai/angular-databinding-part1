import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  timeinterval;
  @Output() intervalFired = new EventEmitter<number>();
  increment: number = 0;
  ngOnInit() {}
  OnStartClicked() {
    this.timeinterval = setInterval(() => {
      this.increment = this.increment + 1;
      this.intervalFired.emit(this.increment);
    }, 1000);
  }
  OnStopClicked() {
    clearInterval(this.timeinterval);
  }
}
