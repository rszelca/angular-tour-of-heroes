const PROXY_CONFIG = [
  {
    // context: [
    //   '/service/',
    //   '/upload/'
    // ],
    //Rest Schnittstelle
    target: 'https://localhost:8443/irc/service/',
    secure: false,
    onProxyRes: function (proxy) {
      if (proxy && proxy.headers && proxy.headers['set-cookie']) {
        proxy.headers['set-cookie'] = proxy.headers['set-cookie'].map(function (cookie) {
          cookie = cookie.replace(/path=.*;/gi, 'path=/;');
          cookie = cookie.replace(/; Secure/gi, '');
          return cookie;
        });
      }
    }
  }
];

module.exports = PROXY_CONFIG;
