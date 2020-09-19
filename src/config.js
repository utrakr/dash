const config = {
    api: process.env.NODE_ENV === 'production' ? 'https://api.utrakr.app' : 'http://localhost:8080',
};
export default config;
