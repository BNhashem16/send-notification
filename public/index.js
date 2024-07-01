console.log('===================================');

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: 'YOUR_PUSHER_APP_ID',
  key: 'YOUR_PUSHER_KEY',
  secret: 'YOUR_PUSHER_SECRET',
  cluster: 'YOUR_PUSHER_CLUSTER',
  useTLS: true,
});

module.exports = async (req, res) => {

  const message = 'Hello! This is a notification from your Vercel function.';
  try {
    await pusher.trigger('notifications', 'new-notification', { message });
    console.log('Notification sent successfully.');
    res.status(200).send('Notification sent.');
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send('Error sending notification.');
  }
};
