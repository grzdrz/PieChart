class Segment {
  constructor(chart, segmentData, index) {
    this.chart = chart;

    this.index = index;
    this.name = segmentData.name;
    this.value = segmentData.value;
    this.topColor = segmentData.topColor;
    this.bottomColor = segmentData.bottomColor;

    this.subradius = this.chart.subradius;

    this.interval = 0.5;

    this.handleSegmentMouseOver = this.handleSegmentMouseOver.bind(this);
    this.handleSegmentMouseOut = this.handleSegmentMouseOut.bind(this);

    this.initialize();
  }

  initialize() {
    this.calculateAngle();
    this.build();
    this.rotate();

    this.outerPath.addEventListener('mouseover', this.handleSegmentMouseOver);
    this.outerPath.addEventListener('mouseout', this.handleSegmentMouseOut);
  }

  calculateAngle() {
    this.startAngle = this.index > 0 ? this.chart.segments[this.index - 1].endAngle : 0;
    this.angle = (this.value * 360) / this.chart.totalValue;
    this.endAngle = this.startAngle + this.angle;
  }

  build() {
    this.buildPaths();
    this.buildDefs();
  }

  buildPaths() {
    this.outerPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.innerPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.outerPath.classList.add('pie-chart__outer-path');
    this.outerPath.classList.add(`pie-chart__outer-path-${this.index}`);
    this.outerPath.classList.add(`js-pie-chart__outer-path-${this.index}`);
    this.innerPath.classList.add('pie-chart__inner-path');
    this.innerPath.classList.add(`pie-chart__inner-path-${this.index}`);
    this.innerPath.classList.add(`js-pie-chart__inner-path-${this.index}`);

    this.outerPath.style.fill = `url(#${this.name}${this.index})`;

    this.chart.paths.append(this.outerPath);
    this.chart.paths.append(this.innerPath);
  }

  buildDefs() {
    this.linearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    this.stopTop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    this.stopBottom = document.createElementNS('http://www.w3.org/2000/svg', 'stop');

    this.linearGradient.setAttribute('id', `${this.name}${this.index}`);
    this.linearGradient.setAttribute('x1', '0');
    this.linearGradient.setAttribute('y1', '0');
    this.linearGradient.setAttribute('x2', '0');
    this.linearGradient.setAttribute('y2', '1');

    this.stopTop.setAttribute('offset', '0%');
    this.stopTop.setAttribute('stop-color', `${this.topColor}`);
    this.stopBottom.setAttribute('offset', '100%');
    this.stopBottom.setAttribute('stop-color', `${this.bottomColor}`);

    this.linearGradient.append(this.stopTop);
    this.linearGradient.append(this.stopBottom);
    this.chart.defs.append(this.linearGradient);
  }

  rotate() {
    const startAngleInRad = this.converDegToRad(this.startAngle);
    const endAngleInRad = this.converDegToRad(this.endAngle);
    const interval = this.converDegToRad(this.interval);

    let x1 = this.chart.radius * Math.cos(startAngleInRad + interval);
    let y1 = this.chart.radius * Math.sin(startAngleInRad + interval);
    let x2 = this.chart.radius * Math.cos(endAngleInRad - interval);
    let y2 = this.chart.radius * Math.sin(endAngleInRad - interval);

    const outerArcData = `M0 0 ${x1} ${y1} A${this.chart.radius} ${this.chart.radius} 0 ${this.angle > 180 ? 1 : 0} 1 ${x2} ${y2}Z`;
    this.outerPath.setAttribute('d', outerArcData)

    let subx1 = this.subradius * Math.cos(startAngleInRad - interval);
    let suby1 = this.subradius * Math.sin(startAngleInRad - interval);
    let subx2 = this.subradius * Math.cos(endAngleInRad + interval);
    let suby2 = this.subradius * Math.sin(endAngleInRad + interval);

    const innerArcData = `M0 0 ${subx1} ${suby1} A${this.subradius} ${this.subradius} 0 ${this.angle > 180 ? 1 : 0} 1 ${subx2} ${suby2}Z`;
    this.innerPath.setAttribute('d', innerArcData);
  }

  converDegToRad(deg) {
    const oneDeg = Math.PI / 180;
    const result = oneDeg * deg;
    return result;
  }

  handleSegmentMouseOver() {
    this.subradius = this.chart.hoveredSubradius;
    this.rotate();
  }

  handleSegmentMouseOut() {
    this.subradius = this.chart.subradius;
    this.rotate();
  }
}

export default Segment;
