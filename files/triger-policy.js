const urls = [
  'https://www.google.com',
  'https://www.tiktok.com'
];

urls.forEach(url => {
  const u = url + '?t=' + Date.now();
  $httpClient.head(u, () => {});
});

$done();