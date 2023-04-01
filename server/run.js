const service = require('./serverHealthService')
const s = new service();

s.start(3000);
