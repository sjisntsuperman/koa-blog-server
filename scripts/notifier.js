const notifier = require('node-notifier');
const messages = process.argv.slice(2);
const message = messages.join(' ');

notifier.notify({
  title: 'Hello!',
  message,
  timeout: 2
});