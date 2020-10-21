class Segment {
  constructor(chart, value, index) {
    this.chart = chart;
    this.value = value;
    this.index = index;

    this.initialize();
  }

  initialize() {
    this.radius = 150;
    this.subradius = 130;

    this.calculateAngle();
    this.build();
    this.rotate();
  }

  calculateAngle() {
    const previousValues = this.chart.values.reduce((previousValue, currentValue, currentIndex) => {
      if (currentIndex >= this.index) return previousValue;
      return previousValue + currentValue;
    });

    this.angle = previousValues / this.chart.totalValue * 360;
    this.startAngle = this.index > 0 ? this.chart.segments[this.index - 1].endAngle : 0;
    this.endAngle = this.startAngle + this.angle;
  }

  build() {
    /* this.pathsContainer = document.createElement('div'); */
    /* const domParser = new DOMParser();
    const paths = domParser.parseFromString(`
      <g class="pie-chart__paths" transform="translate(150,150)">
        <path class="pie-chart__outer-path js-pie-chart__outer-path-${this.index}" d="M0 0 0 -150 A150 150 90 0 1 150 0Z" ></path>
        <path class="pie-chart__inner-path js-pie-chart__inner-path-${this.index}" d="M0 0 0 -130 A150 150 90 0 1 130 0Z" ></path>
      </g>
    `, 'text/html').querySelector('.pie-chart__paths');
    this.chart.svgContainer.append(paths); */
    this.pathsContainer = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    this.pathsContainer.setAttribute('transform', "translate(150,150)");
    this.outerPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    this.innerPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    this.outerPath.classList.add('pie-chart__outer-path');
    this.outerPath.classList.add(`js-pie-chart__outer-path-${this.index}`);
    this.innerPath.classList.add('pie-chart__inner-path');
    this.innerPath.classList.add(`js-pie-chart__inner-path-${this.index}`);

    this.pathsContainer.append(this.outerPath);
    this.pathsContainer.append(this.innerPath);
    this.chart.svgContainer.append(this.pathsContainer);

    /* const outerSelector = `.js-pie-chart__outer-path-${this.index}`;
    const innerSelector = `.js-pie-chart__inner-path-${this.index}`; */
    /* this.outerPath = this.chart.container.querySelector(outerSelector);
    this.innerPath = this.chart.container.querySelector(innerSelector); */

    /* this.chart.svgContainer.append(this.pathsContainer); */
  }

  rotate() {
    const startAngleInRad = this.converDegToRad(this.startAngle);
    const endAngleInRad = this.converDegToRad(this.endAngle);

    let x1 = this.radius * Math.cos(startAngleInRad);
    let y1 = this.radius * Math.sin(startAngleInRad);
    let x2 = this.radius * Math.cos(endAngleInRad);
    let y2 = this.radius * Math.sin(endAngleInRad);

    const outerArcData = `M0 0 ${x1} ${y1} A150 150 0 0 1 ${x2} ${y2}Z`;
    this.outerPath.setAttribute('d', outerArcData)

    let subx1 = this.subradius * Math.cos(startAngleInRad);
    let suby1 = this.subradius * Math.sin(startAngleInRad);
    let subx2 = this.subradius * Math.cos(endAngleInRad);
    let suby2 = this.subradius * Math.sin(endAngleInRad);

    const innerArcData = `M0 0 ${subx1} ${suby1} A150 150 0 0 1 ${subx2} ${suby2}Z`;
    this.innerPath.setAttribute('d', innerArcData)
  }

  converDegToRad(deg) {
    const oneDeg = Math.PI / 180;
    const result = oneDeg * deg;
    return result;
  }
}

export default Segment;
