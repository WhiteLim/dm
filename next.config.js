/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const nextConfig = {
    reactStrictMode: false,
}


const withPWA = require('next-pwa')({
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    sw: 'sw.js'
    //...
  })
  
  module.exports = withPWA({
    // next.js config
  })
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