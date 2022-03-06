import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {


  loggedInUserName: string = "user"

  constructor() { }

  ngOnInit(): void {
  }

  @Output() notify = new EventEmitter();

  onLoginClicked() {
    console.log(`UserDetailsComponent : onLoginClicked()`);
    this.notify.emit("UserDetails Component : emit value")
  }

}
