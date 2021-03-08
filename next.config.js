module.exports = {
  basePath: '/docs',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/test',
        permanent: true
      }
    ]
  }
}