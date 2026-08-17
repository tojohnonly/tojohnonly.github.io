const urls = [
  'https://www.google.com',
  'https://www.tiktok.com'
];

const timestamp = Date.now();

urls.forEach((url) => {
  const separator = url.includes('?') ? '&' : '?';
  const requestUrl = url + separator + 't=' + timestamp;

  $httpClient.head(requestUrl, (error, response) => {
    const statusCode = response && response.statusCode
      ? response.statusCode
      : '无';

    console.log(
      'URL: ' + url +
      '，错误: ' + (error || '无') +
      '，状态码: ' + statusCode
    );
  });
});

setTimeout(() => {
  $done();
}, 5000);