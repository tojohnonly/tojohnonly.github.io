const urls = [
  'https://www.google.com',
  'https://www.tiktok.com'
];

urls.forEach(u => {
  $task.fetch({
    url: u + '?t=' + Date.now(),
    method: 'HEAD'
  });
});

$done();