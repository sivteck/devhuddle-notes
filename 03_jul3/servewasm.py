#!python3

import http.server

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.wasm': 'application/wasm',
    });

httpd = http.server.HTTPServer(('', 8000), Handler)

httpd.serve_forever()
