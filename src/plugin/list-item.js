class ListItem {
  constructor(chart, container, segment) {
    this.chart = chart;
    this.container = container;
    this.segment = segment;

    this.handleItemMouseOver = this.handleItemMouseOver.bind(this);
    this.handleItemMouseOut = this.handleItemMouseOut.bind(this);
  }

  initialize() {
    this.container.addEventListener('mouseover', this.handleItemMouseOver);
    this.container.addEventListener('mouseout', this.handleItemMouseOut);
  }

  handleItemMouseOver() {
    /*  const index = Number.parseInt(event.target.dataset.index);
     const segment = this.chart.segments.find((segment) => { segment.index === index });
     segment.subradius = this.chart.hoveredSubradius;
     this.rotate(); */
    /* this.segment.subradius = this.chart.hoveredSubradius;
    this.segment.rotate(); */
    this.segment.handleSegmentMouseOver();
  }

  handleItemMouseOut() {
    /* const index = Number.parseInt(event.target.dataset.index);
    const segment = this.chart.segments.find((segment) => { segment.index === index });
    segment.subradius = this.chart.subradius;
    this.rotate(); */
    /* this.segment.subradius = this.chart.subradius;
    this.segment.rotate(); */
    this.segment.handleSegmentMouseOut();
  }
}

export default ListItem;
