const urls = [
  'https://www.google.com',
  'https://www.tiktok.com'
];

const timestamp = Date.now();

urls.forEach((url) => {
  const separator = url.includes('?') ? '&' : '?';
  const requestUrl = url + separator + 't=' + timestamp;

  $httpClient.head(requestUrl, (error, response, data) => {
    const statusCode = response ? response.statusCode : '无';
    const headers = response && response.headers
      ? JSON.stringify(response.headers)
      : '{}';

    console.log(
      'URL: ' + requestUrl +
      '\n错误: ' + (error || '无') +
      '\n状态码: ' + statusCode +
      '\n响应头: ' + headers +
      '\n响应体: ' + (data || '')
    );
  });
});

setTimeout(() => {
  $done();
}, 5000);