/** @type {import('next').NextConfig} */


module.exports = {
  compiler: { 
    reactStrictMode: true, 
    styledComponents: true },
    images: {
      domains:['s3.amazonaws.com'],
    },
}
