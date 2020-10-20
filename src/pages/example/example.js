import '../base/base';

import PieChart from '../../plugin/plugin';

import './example.scss';

const plugins = Array.from(document.querySelectorAll('.example__plugin-instance'))
  .map((container) => {
    return new PieChart(container);
  });