/* eslint-disable no-unused-vars */
import '../base/base';

import PieChart from '../../plugin/pie-chart';

import './example.scss';

const plugins = Array.from(document.querySelectorAll('.example__plugin-instance'))
  .map((container) => new PieChart(container));
