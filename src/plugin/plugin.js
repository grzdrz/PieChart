import Segment from './Segment';
import ChartList from './ChartList';

import './plugin.scss';

class PieChart {
  constructor(outerContainer) {
    this.outerContainer = outerContainer;

    this.rotate = this.rotate.bind(this);

    this.initialize();
  }

  initialize() {
    this.container = this.outerContainer.querySelector('.pie-chart');
    this.chartListContainer = this.container.querySelector('.pie-chart__chart-list');
    this.currentSegmentValue = this.container.querySelector('.pie-chart__current-segment-value');
    this.currentSegmentName = this.container.querySelector('.pie-chart__current-segment-name');
    this.buttonTEST = this.container.querySelector('.test-button');

    this.radius = Number.parseInt(this.container.dataset.radius);
    this.subradius = Number.parseInt(this.container.dataset.subradius);
    this.hoveredSubradius = Number.parseInt(this.container.dataset.hoveredSubradius);

    const pathsContainer = this.container.querySelector('.pie-chart__paths');
    const outerPaths = Array.from(pathsContainer.querySelectorAll('.pie-chart__outer-path'));
    const innerPaths = Array.from(pathsContainer.querySelectorAll('.pie-chart__inner-path'));

    this.segments = [];
    outerPaths.forEach((outerPath, index) => {
      this.segments.push(new Segment(this, index, outerPath, innerPaths[index]));
    });

    this.chartList = new ChartList(this, this.chartListContainer);

    this.totalValue = this.segments.reduce((previousValue, currentSegment) => previousValue + currentSegment.value, 0);

    this.buttonTEST.addEventListener('click', this.rotate);

    this.segments.forEach((segment) => segment.initialize());
    this.chartList.initialize();
    this.chartList.items.forEach((item) => item.initialize());
  }

  rotate() {
    this.segments.forEach((segment) => {
      segment.startAngle += 10;
      segment.endAngle += 10;
      segment.rotate();
    });
  }
}

export default PieChart;


