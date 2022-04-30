var { plot, stack, clear, Plot } = require('nodeplotlib');

const trace1 = {x: [1, 2, 3], y: [1, 2, 3], type: 'scatter'};
const trace2 = {x: [1, 3, 4], y: [6, 9, 16], type: 'scatter'};
plot([trace1, trace2]);
