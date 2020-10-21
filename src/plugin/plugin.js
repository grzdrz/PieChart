import Segment from './Segment';

import './plugin.scss';

class PieChart {
  constructor(container, values = [30, 20, 40, 10]) {
    this.container = container;
    this.values = values;
    this.totalValue = values.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    this.segments = [];

    this.rotate = this.rotate.bind(this);

    this.initialize();
  }

  initialize() {
    this.build();

    /* this.rotate(); */
    /* const rotateTimerId = setInterval(this.rotate, 300);

    this.buttonTEST.addEventListener('click', () => {
      clearInterval(rotateTimerId);
    }); */
    this.buttonTEST.addEventListener('click', this.rotate);
  }

  build() {
    this.chartContainer = document.createElement('div');
    this.chartContainer.classList.add('pie-chart');
    this.chartContainer.innerHTML = `
      <svg class="pie-chart__svg">
        <defs class="pie-chart__defs">
          <linearGradient id="red-blue" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="red" />
            <stop offset="100%" stop-color="blue" />
          </linearGradient>
          <linearGradient id="red-blue2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="rgb(255, 227, 156)" />
            <stop offset="100%" stop-color="rgb(255, 186, 156)" />
          </linearGradient>
        </defs>

      </svg>
    `;
    this.svgContainer = this.chartContainer.querySelector('.pie-chart__svg')
    /* this.defs = this.svgContainer.querySelector('.pie-chart__defs'); */

    this.buttonTEST = document.createElement('button');
    this.buttonTEST.classList.add('test-button');
    this.buttonTEST.textContent = 'test button';

    this.container.append(this.chartContainer);
    this.container.append(this.buttonTEST);

    this.buildSegments();
  }

  buildSegments() {
    this.values.forEach((value, index) => {
      this.segments.push(new Segment(this, value, index));
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

// M move to (x, y) -> draw line to (x, y) -> A radius start(x, y) -> ? ? ? -> end (x, y)

