module.exports = {
    url: 'mongodb://' + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + process.env.OPENSHIFT_MONGODB_DB_PORT + '/taskmanagement',
    auth: {
        user: process.env.OPENSHIFT_MONGODB_DB_USERNAME,
        password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD
    }
}