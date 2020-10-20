import './plugin.scss';

class PieChart {
  constructor(container) {
    this.container = container;

    this.rotate = this.rotate.bind(this);

    this.initialize();
  }

  initialize() {
    this.build();

    this.startAngle = 0;
    this.endAngle = 30;
    this.radius = 150;
    this.subradius = 130;

    /* this.rotate(); */
    const rotateTimerId = setInterval(this.rotate, 300);

    this.buttonTEST.addEventListener('click', () => {
      clearInterval(rotateTimerId);
    });
    /* this.buttonTEST.addEventListener('click', this.rotate); */
  }

  build() {
    this.svgContainer = document.createElement('div');
    this.svgContainer.classList.add('pie-chart');
    this.svgContainer.innerHTML = `
      <svg class="test-svg">
        <defs>
          <linearGradient id="red-blue" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="red" />
            <stop offset="100%" stop-color="blue" />
          </linearGradient>
          <linearGradient id="red-blue2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="rgb(255, 227, 156)" />
            <stop offset="100%" stop-color="rgb(255, 186, 156)" />
          </linearGradient>
        </defs>

        <g transform="translate(150,150)">
          <path class="test1" d="M0 0 0 -150 A150 150 90 0 1 150 0Z" />
          <path class="test2" d="M0 0 0 -130 A150 150 90 0 1 130 0Z" fill="white" />
        </g>
      </svg>
    `;
    this.outerPath = this.svgContainer.querySelector('.test1');
    this.innerPath = this.svgContainer.querySelector('.test2');

    this.buttonTEST = document.createElement('button');
    this.buttonTEST.classList.add('test-button');
    this.buttonTEST.textContent = 'test button';

    this.container.append(this.svgContainer);
    this.container.append(this.buttonTEST);
  }

  rotate() {
    this.startAngle += 10;
    this.endAngle += 10;
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

export default PieChart;

// M move to (x, y) -> draw line to (x, y) -> A radius start(x, y) -> ? ? ? -> end (x, y)

