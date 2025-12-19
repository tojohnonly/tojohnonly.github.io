const urls = [
  'https://www.google.com',
  'https://www.tiktok.com',
  'https://ourl.cn/ZEwZ6H'
];

urls.forEach(url => {
  $httpClient.head(url, () => {});
});

$done();