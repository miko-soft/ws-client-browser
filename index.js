import WsClientBrowser13 from './src/ws-clients/WsClientBrowser13.js';


// default
const WsClientBrowser = WsClientBrowser13;

// ESM
export { WsClientBrowser };


// window
if (typeof window !== 'undefined') {
  if (!window.mikosoft) { window.mikosoft = {}; }
  window.mikosoft.WsClientBrowser = WsClientBrowser;
}
