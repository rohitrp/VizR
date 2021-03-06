import {Component, OnInit, Input} from "angular2/core";
import {RouteParams} from "angular2/router";

@Component({
  selector: 'text',
  template: `
    <div id="text-{{entryId}}">
      <p>
        {{ text }}
      </p>
    </div>
  `
})

export class TextComponent implements OnInit {
  @Input() text: string;
  @Input() entryId: number;
  id: number;

  constructor(private _routeParams: RouteParams) { }

  ngOnInit() {
    this.id = +this._routeParams.get('id');
  }
}