location.href == 'about:blank' && setTimeout(function () { document.write('<!DOCTYPE HTML><html><head><meta charset="UTF-8"><style>html,body{height:100%;width:100%;margin:0;padding:0}</style><link rel="stylesheet" type="text/css" href="' + chrome.extension.getURL('ABPlayer.css') + '" onload="window.stop()"></head><body></body></html>'); chrome.runtime.sendMessage('', 'inject', {}, function () { }); }, 0);