const urls = [
  'https://www.google.com',
  'https://www.tiktok.com'
];

urls.forEach(url => {
  $httpClient.head(url, () => {});
});

$done();