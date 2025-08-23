export default {
    fetch(request) {
        const base = "http://127.0.0.1:8787";
        const statusCode = 301;
        const source = new URL(request.url);
        const destination = new URL(source.pathname, base);
        return Response.redirect(destination.toString(), statusCode);
    },
};
//# sourceMappingURL=index.js.map