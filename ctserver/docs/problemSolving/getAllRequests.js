
module.exports = {
    // operation's method
    get: {
        tags: ["Customer and Insurance related operations"],
        description: "Get all user requests",
        operationId: "allUserRequests",
        parameters: [],
        responses: {
            200: {
                description: "All user's requests successfully retrieved"
            },
            500: {
                description: "Server error"
            }
        }
    }
}