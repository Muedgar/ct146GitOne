
module.exports = {
    // operation's method
    post: {
        tags: ["Authentication and Authorization operations"],
        description: "Create User",
        operationId: "createUser",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/createUser"
                    }
                }
            }
        },
        responses: {
            201: {
                description: "User created successfully"
            },
            500: {
                description: "Server error"
            }
        }
    }
}