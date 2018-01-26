module.exports = {
    url: 'mongodb://127.0.0.1:27017/taskmanagement',
    auth: {
        user: process.env.OPENSHIFT_MONGODB_DB_USERNAME,
        password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD
    }
}