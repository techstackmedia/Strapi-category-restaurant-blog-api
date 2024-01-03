module.exports = () => ({
    meilisearch: {
        config: {
            host: "http://localhost:7700",
            apiKey: process.env.MEILISEARCH_API,
        },
    },
});
