
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/product-ayurGlow/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/product-ayurGlow"
  },
  {
    "renderMode": 2,
    "route": "/product-ayurGlow/cart"
  },
  {
    "renderMode": 2,
    "route": "/product-ayurGlow/checkout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23579, hash: '401c61a860109d02de9f39d7a2190bedd20ec76f7d977d0ac0090f105523c624', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17153, hash: '1069d09345d9c21a4426505bf8e73259efd377d23e6758c97c61cf31f78cb946', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 51579, hash: 'c180e2eec33cba567b593b83b05d9a533e8a8be1bae4ab47db07725dd964be44', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 51355, hash: '184ee8f3e10d54b4a2c96574aea2b999c1c1197e486cb48a3d89f0df78b13a6a', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53779, hash: 'd02cc4b8a2a210265f6fad0dd8cc875476e112c5174c6e2efe16b4d47b36e066', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WNKDDIZJ.css': {size: 6979, hash: 'AsSxQJi0uyE', text: () => import('./assets-chunks/styles-WNKDDIZJ_css.mjs').then(m => m.default)}
  },
};
