
module.exports = {
    // operation's method
    post: {
        tags: ["Authentication and Authorization operations"],
        description: "Signin User",
        operationId: "signInUser",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/signInUser"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "User signed in successfully"
            },
            400: {
                description: "Request error"
            }
        }
    }
}