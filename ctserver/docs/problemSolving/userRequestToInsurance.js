
module.exports = {
    // operation's method
    put: {
        tags: ["Customer and Insurance related operations"],
        description: "User Request To Insurance",
        operationId: "userRequestToInsurance",
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
                        $ref: "#/components/schemas/userRequestToInsurance"
                    }
                }
            }
        },
        responses: {
            201: {
                description: "User request received successfully"
            },
            400: {
                description: "Bad request"
            }
        }
    }
}