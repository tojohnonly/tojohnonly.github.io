const urls = [
  'https://www.google.com',
  'https://www.tiktok.com',
  'https://ourl.cn/SFPXC3'
];

urls.forEach(url => {
  $httpClient.head(url, () => {});
});

$done();