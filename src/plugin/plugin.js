import Segment from './Segment';

import './plugin.scss';

const initializeSegmentsData = [
  { value: 30, topColor: 'rgb(188, 156, 255)', bottomColor: 'rgb(139, 164, 249)', name: 'name1' },
  { value: 50, topColor: 'rgb(111, 207, 151)', bottomColor: 'rgb(102, 210, 234)', name: 'name2' },
  { value: 60, topColor: 'rgb(255, 227, 156)', bottomColor: 'rgb(255, 186, 156)', name: 'name3' },
  { value: 10, topColor: 'rgb(145, 145, 145)', bottomColor: 'rgb(61, 73, 117)', name: 'name4' },
];

class PieChart {
  constructor(container, segmentsData = [...initializeSegmentsData]) {
    this.container = container;

    this.segmentsData = segmentsData;
    this.totalValue = segmentsData.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0);
    this.segments = [];

    this.radius = 150;
    this.subradius = 130;
    this.hoveredSubradius = 120;

    this.rotate = this.rotate.bind(this);

    this.initialize();
  }

  initialize() {
    this.build();
    this.buttonTEST.addEventListener('click', this.rotate);
  }

  build() {
    this.chartContainer = document.createElement('div');
    this.chartContainer.classList.add('pie-chart');
    this.chartContainer.innerHTML = `
      <svg class="pie-chart__svg">
        <defs class="pie-chart__defs"></defs>
        <g class="pie-chart__paths" transform="translate(${this.radius},${this.radius})"></g>
        <circle class="pie-chart__central-circle" cx="0" cy="0" r="${this.hoveredSubradius}" transform="translate(${this.radius},${this.radius})" />
      </svg>
    `;
    this.svgContainer = this.chartContainer.querySelector('.pie-chart__svg')
    this.defs = this.svgContainer.querySelector('.pie-chart__defs');
    this.paths = this.svgContainer.querySelector('.pie-chart__paths');

    this.buttonTEST = document.createElement('button');
    this.buttonTEST.classList.add('test-button');
    this.buttonTEST.textContent = 'test button';

    this.container.append(this.chartContainer);
    this.container.append(this.buttonTEST);

    this.buildSegments();
  }

  buildSegments() {
    this.segmentsData.forEach((segmentData, index) => {
      this.segments.push(new Segment(this, segmentData, index));
    });
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


