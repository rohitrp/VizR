System.register(['angular2/core', "../user/user.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1;
    var ChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ChartComponent = (function () {
                function ChartComponent(_userService) {
                    this._userService = _userService;
                    this.options = ['Pulsar', 'TOAs', 'Raw Profiles',
                        'Period', 'Period Derivative', 'DM', 'RMS', 'Binary'];
                    this.margin = { top: 20, right: 20, bottom: 80, left: 70 };
                    this.width = 800 - this.margin.left - this.margin.right;
                    this.height = 600 - this.margin.top - this.margin.bottom;
                }
                ChartComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getPulsarData()
                        .subscribe(function (data) {
                        _this.pulsarData = data;
                        _this.addPlot();
                    }, function (err) { return console.log(err); }, function () { return console.log('Pulsar data received'); });
                };
                ChartComponent.prototype.initializeAxes = function () {
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
                        .domain([.9 * d3.min(this.pulsarData, function (datum) { return datum[xVal]; }),
                        1.1 * d3.max(this.pulsarData, function (datum) { return datum[xVal]; })])
                        .range([0, this.width]);
                    this.yScale = this.yScale
                        .domain([.9 * d3.min(this.pulsarData, function (datum) { return datum[yVal]; }),
                        1.1 * d3.max(this.pulsarData, function (datum) { return datum[yVal]; })])
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
                        .on('zoom', function () {
                        __this.zoomed();
                    });
                };
                ChartComponent.prototype.zoomed = function () {
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
                };
                ChartComponent.prototype.initializePlotValues = function (xVal, yVal, xScaleType, yScaleType) {
                    this.xVal = xVal;
                    this.yVal = yVal;
                    this.xScaleType = xScaleType;
                    this.yScaleType = yScaleType;
                    this.addPlot();
                };
                ChartComponent.prototype.addPlot = function () {
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
                };
                ChartComponent.prototype.updatePlot = function (xVal, yVal, xScaleType, yScaleType) {
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
                };
                ChartComponent.prototype.addPlotEntry = function (xVal, yVal, xScaleType, yScaleType) {
                    var data = {
                        type: 'plot',
                        xVal: xVal,
                        yVal: yVal,
                        xScaleType: xScaleType,
                        yScaleType: yScaleType,
                        id: this.postId
                    };
                    this._userService.addEntry(data);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChartComponent.prototype, "xVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChartComponent.prototype, "yVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChartComponent.prototype, "xScaleType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChartComponent.prototype, "yScaleType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ChartComponent.prototype, "postId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ChartComponent.prototype, "entryId", void 0);
                ChartComponent = __decorate([
                    core_1.Component({
                        selector: 'chart',
                        templateUrl: 'app/account/chart/template/chart.component.html',
                        styleUrls: ['app/account/chart/template/chart.component.css']
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ChartComponent);
                return ChartComponent;
            }());
            exports_1("ChartComponent", ChartComponent);
        }
    }
});
//# sourceMappingURL=chart.component.js.map