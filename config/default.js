module.exports = {
	Server: {
		/**
		 * The address where the HTTP server will listen.
		 */
		listeningAddress: '127.0.0.1',

		/**
		 * The port on which the HTTP server will listen.
		 */
		listeningPort: 3000,

		/**
		 * Configuration of restify's BodyParser / BodyReader.
		 */
		bodyParserConfiguration: {
			/**
			 * Request size in bytes.
			 */
			maxBodySize: 1000,
		},

		/**
		 * Configuration of restify's throttle module. See http://mcavage.me/node-restify/
		 * for a list of configuration options ("Throttle" section below "Bundled Plugins").
		 */
		throttleConfiguration: {
			/**
			 * Decides if the module will be enabled.
			 */
			isEnabled: false,
		}
	},

	Application: {
		/**
		 * The base URL where the real files can be found. The following parameters are appended to this 'base-URL':
		 * 1) The subdirectory of the update (if set)
		 * 2) The filename of the update
		 */
		realDownloadBaseUrl: "http://localhost/download",

		/**
		 * The base URL for the download-proxy (which is handled by cm-updater-api's webserver at /download-rom).
		 * This little proxy acts as statistics module.
		 *
		 * NOTE: If isDownloadProxyEnabled is set to false then this value can be ignored!
		 */
		proxyDownloadBaseUrl: "http://localhost:3000/download",

		/**
		 * Similar to proxyDownloadBaseUrl this is the base-URL used to build each Rom's changelog URL.
		 * The rom-ID will be added to this as path-parameter.
		 */
		changelogBaseUrl: "http://localhost:3000/changelog",

		/**
		 * Decides if the download proxy (used for gathering download statistics) is enabled or not.
		 */
		isDownloadProxyEnabled: true,
	},

	Database: {
		name: "",
		username: "",
		password: "",
		options: {
			logging: false,
			dialect: "sqlite",
			storage: "./data/database.sqlite",
		}
	}
}
