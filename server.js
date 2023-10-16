// Disable EsLint and Prettier first.

import http from "http";

// Test Lint
const server = http.createServer(function (_, res) {
	// Test format
	            return res.end(
		"<h1>If this is showing on browser, you fixed the Biome linter error.</h1>",
	);
});

server.listen(       9000, function(){
    console.log("Server started.")
})