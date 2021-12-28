const sanityClient = require('@sanity/client')
const {sanityClientConfig} = require('../../sanityClientConfig')

sanityClientConfig.token = 'XAS223DDE'
const client = sanityClient(sanityClientConfig)

module.exports = client
