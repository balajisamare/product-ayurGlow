
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/cart"
  },
  {
    "renderMode": 2,
    "route": "/checkout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23562, hash: '1933c4b3e61aa19bef39ec4451fc19b856aa6296802ddc3e3650bc6498d841ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17136, hash: '171ebb494d7593f072b40bce8653897a933ad1d0df4956bfbd1c9dbf2c640be4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 51562, hash: '538d3f6d53d38427e193c74e9b220876929b9e606b2e4cc5ce5c3700b10b54f4', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 51338, hash: 'fced3e2a3f3f9eb2e5f1fd55c1afbb532d39463c7f38aa3c40be909c0fb5a81d', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53762, hash: '7e9e6b96e63755f023bdc4a06a56001fd63b23266168cd229101c9eef55e3298', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WNKDDIZJ.css': {size: 6979, hash: 'AsSxQJi0uyE', text: () => import('./assets-chunks/styles-WNKDDIZJ_css.mjs').then(m => m.default)}
  },
};
