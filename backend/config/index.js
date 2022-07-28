
let config = process.env.NODE_ENV === 'production' ? require('./prod') : require('./prod')

module.exports = config
