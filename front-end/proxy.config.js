const proxy = [
  {
    context: '/api',
    target: 'http://localhost',
    secure: false
  }
];
module.exports = proxy;
