module.exports = {
    "ui": {
        "port": 3001,
        "weinre": {
            "port": 8080
        }
    },
    "files": [
        "dist/*.css",
        "dist/*.js",
    ],
    "server": {
        baseDir: "./dist"
    },
    "proxy": false,
    "port": 3000,
};