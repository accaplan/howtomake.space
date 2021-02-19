const client = require('@sanity/client')

module.exports = client({
  projectId: 'kq2f9npm',
  dataset: 'production',
  useCdn: false,
})
