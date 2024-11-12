const data = require('./data.js');
const user = querySelector('#user');
const address = querySelector('#address');
const contact = querySelector('#contact');

const params = new URL(location.href).searchParams;
const user = params.get('user');

j:
