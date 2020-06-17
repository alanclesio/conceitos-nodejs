const { isUuid } = require("uuidv4");

const middleware = {
    validateUuid: function (request, response, next) {
        const { id } = request.params;

        if (!isUuid(id))
            return response.status(400).json({ error: "Uuid is not valid." })

        next();
    }
}

module.exports = middleware;
