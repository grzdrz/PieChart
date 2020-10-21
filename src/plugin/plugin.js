import Segment from './Segment';
/* import ChartList from './ChartList'; */

import './plugin.scss';

class PieChart {
  constructor(outerContainer) {
    this.outerContainer = outerContainer;

    this.rotate = this.rotate.bind(this);

    this.initialize();
  }

  initialize() {
    this.container = this.outerContainer.querySelector('.pie-chart');
    this.buttonTEST = this.container.querySelector('.test-button');

    this.radius = Number.parseInt(this.container.dataset.radius);
    this.subradius = Number.parseInt(this.container.dataset.subradius);
    this.hoveredSubradius = Number.parseInt(this.container.dataset.hoveredSubradius);

    this.segments = [];
    const pathsContainer = this.container.querySelector('.pie-chart__paths');
    const outerPaths = Array.from(pathsContainer.querySelectorAll('.pie-chart__outer-path'));
    const innerPaths = Array.from(pathsContainer.querySelectorAll('.pie-chart__inner-path'));

    outerPaths.forEach((outerPath, index) => {
      this.segments.push(new Segment(this, index, outerPath, innerPaths[index]));
    });

    this.totalValue = this.segments.reduce((previousValue, currentSegment) => previousValue + currentSegment.value, 0);

    this.buttonTEST.addEventListener('click', this.rotate);

    this.segments.forEach((segment) => segment.initialize());
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


