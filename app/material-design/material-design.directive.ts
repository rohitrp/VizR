import {Directive, AfterViewInit} from 'angular2/core';
declare var componentHandler;

@Directive({
  selector: '[mdlUpgrade]'
})

export class MdlUpgradeDirective implements AfterViewInit {

  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }
}