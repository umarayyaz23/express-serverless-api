const serverless = require("serverless-http");

const app = require("./route");

const binaryMimeTypes = [
	"application/javascript",
	"application/json",
	"application/octet-stream",
	"application/xml",
	"image/jpeg",
	"image/png",
	"image/gif",
	"text/comma-separated-values",
	"text/css",
	"text/html",
	"text/javascript",
	"text/plain",
	"text/text",
	"text/xml",
	"image/x-icon",
	"image/svg+xml",
	"application/x-font-ttf",
	"font/ttf",
	"font/otf",
];

module.exports.handler = serverless(app,
	{ binary: binaryMimeTypes }
);