class ChartList {
  constructor(chart) {
    this.chart = chart;

    /* this.initialize(); */
  }

  /* initialize() {
    this.build();
  } */

  build() {
    this.chart.segmentsData.forEach((segment) => {
      this.item = document.createElement('div');
      this.item.classList.add('pie-chart__chart-list-item');
      this.item.innerHTML = `
        <div class="pie-chart__item-dot"></div>
        <div class="pie-chart__item-text">${segment.name}</div>
      `;

      this.chart.chartListContainer.append(item);
    });
    document
  }
}

export default ChartList;
