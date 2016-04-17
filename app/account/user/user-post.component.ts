import {Component, OnInit} from 'angular2/core';
import {UserService} from "./user.service";
import {TextComponent} from "./text.component";
import {RouteParams} from "angular2/router";
import {ChartComponent} from "./../chart/chart.component";
import {MdlUpgradeDirective} from "../../material-design/material-design.directive";

@Component({
  selector: 'user-post',
  templateUrl: 'app/account/user/template/user-post.component.html',
  styles: [
    `
    a {
      cursor: pointer;
    }
    .mdl-grid {
        text-align: left;;
    }
    .mdl-tabs {
        margin-bottom: 50px;
    }
    .mdl-textfield {
        width: 80%;
    }
    .container {
        text-align: center;
    }
    #textArea {
        width: 100%;
    }
    `
  ],
  directives: [TextComponent, ChartComponent, MdlUpgradeDirective]
})

export class UserPostComponent implements OnInit {
  id: number;
  postEntries: String[];
  currentTab = 'text';
  postTitle: string;
  
  constructor(private _userService: UserService,
              private _routeParams: RouteParams) { }

  ngOnInit() {
    this.id = +this._routeParams.get('id');
    this.postEntries = this._userService.getPostEntries(this.id);
    this.postTitle = this._userService.getPostTitle(this.id);
  }
  
  addEntry(text: string, textArea: HTMLTextAreaElement) {
    if (text === '') return;

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
