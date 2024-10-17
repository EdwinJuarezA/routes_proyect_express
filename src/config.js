module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'default_secret',
    jwtExpiration: '1h',
};  