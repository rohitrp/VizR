
import {Component, Input, OnInit} from 'angular2/core';
import {UserService} from "../user/user.service";


@Component({
  selector: 'chart',
  templateUrl: 'app/account/chart/template/chart.component.html',
  styleUrls: ['app/account/chart/template/chart.component.css']
})

export class ChartComponent implements OnInit {
  @Input() xVal: string;
  @Input() yVal: string;
  @Input() xScaleType: string;
  @Input() yScaleType: string;
  @Input() postId: number;
  @Input() entryId: number;
  @Input() showOptions: boolean;

  private pulsarData: any;
  private options = ['Pulsar', 'TOAs', 'Raw Profiles',
    'Period', 'Period Derivative', 'DM', 'RMS', 'Binary'];
  private objects;
  private svg;
  private xScale;
  private yScale;
  private xAxis;
  private yAxis;
  private zoom;

  private margin = {top: 20, right: 20, bottom: 80, left: 70};
  private width = 800 - this.margin.left - this.margin.right;
  private height = 600 - this.margin.top - this.margin.bottom;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getPulsarData()
      .subscribe(
        data => {
          this.pulsarData = data;
          this.addPlot();
        },
        err => console.log(err),
        () => console.log('Pulsar data received')
      );
  }

  initializeAxes() {
    var xVal = this.xVal;
    var yVal = this.yVal;

    this.xScale = d3.scale;
    this.yScale = d3.scale;

    this.xScale = (this.xScaleType === 'linear')
                  ? this.xScale.linear()
                  : this.xScale.log();

    this.yScale = (this.yScaleType === 'linear')
                  ? this.yScale.linear()
                  : this.yScale.log();

    this.xScale = this.xScale
      .domain([.9 * d3.min(this.pulsarData, datum => datum[xVal]),
        1.1 * d3.max(this.pulsarData, datum => datum[xVal])])
      .range([0, this.width]);

    this.yScale = this.yScale
      .domain([.9 * d3.min(this.pulsarData, datum => datum[yVal]),
        1.1 * d3.max(this.pulsarData, datum => datum[yVal])])
      .range([this.height, 0]);
    
    this.xAxis = d3.svg.axis()
      .scale(this.xScale)
      .orient('bottom')
      .ticks(10)
      .tickSize(-this.height)
      .tickPadding(10);
    
    this.yAxis = d3.svg.axis()
      .scale(this.yScale)
      .orient('left')
      .ticks(10)
      .tickSize(-this.width)
      .tickPadding(10);

    var __this = this;

    this.zoom = d3.behavior.zoom()
      .x(this.xScale)
      .y(this.yScale)
      .scaleExtent([0, 500])
      .on('zoom', () => {
        __this.zoomed();
      });

  }

  zoomed() {
    var xVal = this.xVal;
    var yVal = this.yVal;
    var xScale = this.xScale;
    var yScale = this.yScale;

    this.svg.select('.x.axis').call(this.xAxis);
    this.svg.select('.y.axis').call(this.yAxis);

    this.svg.selectAll('.bubble')
      .attr('transform', function (datum) {
        return 'translate(' + xScale(datum[xVal]) + ',' + yScale(datum[yVal]) + ')';
      });

  }
  
  initializePlotValues(xVal: string, yVal: string, 
                       xScaleType: string, yScaleType: string) {
    this.xVal = xVal;
    this.yVal = yVal;
    this.xScaleType = xScaleType;
    this.yScaleType = yScaleType;
    
    this.addPlot();
  }

  addPlot() {

    this.initializeAxes();

    var xVal = this.xVal;
    var yVal = this.yVal;

    var xScale = this.xScale;
    var yScale = this.yScale;

    this.svg = d3.select('#plot-' + this.entryId)
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')')
      .call(this.zoom);

    this.svg.append('rect')
      .attr('width', this.width)
      .attr('height', this.height);

    this.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(this.xAxis);

    this.svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(0,0)')
      .call(this.yAxis);

    this.objects = this.svg.append('svg')
      .classed('objects', true)
      .attr('width', this.width)
      .attr('height', this.height);

    this.objects.selectAll('.bubble')
      .data(this.pulsarData)
      .enter()
      .append('circle')
      .classed('bubble', true)
      .attr('transform', function (datum) {
        return 'translate(' + xScale(datum[xVal]) + ',' + yScale(datum[yVal]) + ')';
      })
      .attr('r', 5)
      .style('fill', 'teal');

  }

  updatePlot(xVal: string, yVal: string, xScaleType: string, yScaleType: string) {
    this.xVal = xVal;
    this.yVal = yVal;
    this.xScaleType = xScaleType;
    this.yScaleType = yScaleType;

    this.initializeAxes();

    this.svg.call(this.zoom);

    var xScale = this.xScale;
    var yScale = this.yScale;

    this.objects.selectAll('.bubble')
      .transition()
      .duration(400)
      .ease('back')
      .attr('transform', function (datum) {
        return 'translate(' + xScale(datum[xVal]) + ',' + yScale(datum[yVal]) + ')';
      });

    this.svg.selectAll('g .x.axis').call(this.xAxis);
    this.svg.selectAll('g .y.axis').call(this.yAxis);
  }
  
  addPlotEntry(xVal: string, yVal: string, 
               xScaleType: string, yScaleType: string) {
    var data = {
      type: 'plot',
      xVal: xVal,
      yVal: yVal,
      xScaleType: xScaleType,
      yScaleType: yScaleType,
      id: this.postId
    };
    
    this._userService.addEntry(data);
    
  }

}