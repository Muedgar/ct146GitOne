
module.exports = {
    // operation's method
    put: {
        tags: ["Customer and Insurance related operations"],
        description: "Insurance feedback to the user",
        operationId: "feedBack",
        parameters: [
            // expected params.
      {
        name: "id", // name of the param
        in: "path", // location of the param
        schema: {
          $ref: "#/components/schemas/id", // data model of the param
        },
        required: true, // Mandatory param
        description: "A single request id", // param desc.
      },
        ],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/feedBack"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Feedback from insurance updated successfully"
            },
            500: {
                description: "Server request"
            }
        }
    }
}