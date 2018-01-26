module.exports = {
    //  url: 'mongodb://127.0.0.1:27017/taskmanagement',
    url: process.env[".MONGODB_ADDON_URI"],
    auth: {
        user: process.env["MONGODB_ADDON_USER"],
        password: process.env["MONGODB_ADDON_PASSWORD"]
    }
}