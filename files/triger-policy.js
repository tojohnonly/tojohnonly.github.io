const urls = [
  'https://www.google.com',
  'https://www.youtube.com',
  'https://www.tiktok.com',
  'https://openai.com',
  'https://telegram.org'
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
      'URL: ' + requestUrl +
      '，错误: ' + (error || '无') +
      '，状态码: ' + statusCode
    );
  });
});

setTimeout(() => {
  console.log('脚本结束');
  $done();
}, 9000);