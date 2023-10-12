
const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
    reactStrictMode: false,
}

module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: "public",
                    sw: 'sw.js',
				},
			},
		],
		// 추가 플러그인 작성
	],
	nextConfig
);