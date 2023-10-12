/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const nextConfig = {
    reactStrictMode: false,
}


const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    sw: 'sw.js',
    disable: process.env.NODE_ENV === 'development'
  })
  
  module.exports = withPWA(nextConfig)
/* 
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
); */