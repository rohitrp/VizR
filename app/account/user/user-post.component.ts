import {Component, OnInit} from 'angular2/core';
import {UserService} from "./user.service";
import {TextComponent} from "./text.component";
import {RouteParams} from "angular2/router";
import {ChartComponent} from "./../chart/chart.component";

@Component({
  selector: 'user-post',
  templateUrl: 'app/account/user/template/user-post.component.html',
  styles: [
    `
    a {
      cursor: pointer;
    }
    `
  ],
  directives: [TextComponent, ChartComponent]
})

export class UserPostComponent implements OnInit {
  id: number;
  postEntries: String[];
  currentTab = 'text';
  
  constructor(private _userService: UserService,
              private _routeParams: RouteParams) { }

  ngOnInit() {
    this.id = +this._routeParams.get('id');
    this.postEntries = this._userService.getPostEntries(this.id);
  }
  
  addEntry(text: string, textArea: HTMLTextAreaElement) {
    const data = {
      id: this.id,
      type: 'text',
      text: text
    };
    
    this._userService.addEntry(data);

    textArea.value = '';
  }
  
  tabToggle(tab: string) {
    this.currentTab = tab;
  }
  
}
