import ListItem from './list-item';

class ChartList {
  constructor(chart, container) {
    this.chart = chart;
    this.container = container;
  }

  initialize() {
    const itemsContainer = Array.from(this.container.querySelectorAll('.pie-chart__list-item'));
    this.items = itemsContainer.map((itemContainer, index) => {
      return new ListItem(this.chart, itemContainer, this.chart.segments[index]);
    });

  };
}

export default ChartList;
