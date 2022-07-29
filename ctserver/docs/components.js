
module.exports = {
    components: {
        schemas: {
            // single id
            id: {
                type: "string",
                description: "An id of user",
                example: "62e1a288d986602d80c83161"
            },
            // create user model
            createUser: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        description: "User email",
                        example: "user@email.com"
                    },
                    password: {
                        type: "string",
                        description: "User password",
                        example: "Xwe@#23"
                    },
                    name: {
                        type: "string",
                        description: "User names",
                        example: "Mugabo Karoli"
                    },
                    nationalId: {
                        type: "string",
                        description: "User names",
                        example: "119988003334455"
                    },
                    phone: {
                        type: "string",
                        description: "User phone",
                        example: "0788594000"
                    },
                    dob: {
                        type: "string",
                        description: "User Date of Birth",
                        example: "12-12-1997"
                    },
                    address: {
                        type: "string",
                        description: "User Location",
                        example: "Kanombe"
                    },
                    roles: {
                        type: "string",
                        description: "User role",
                        example: 'user'
                    }
                }
            },
            // sign in user model
            signInUser: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        description: "User email",
                        example: "user@email.com"
                    },
                    password: {
                        type: "string",
                        description: "User password",
                        example: "Xwe@#23"
                    }
                }
            },
            // 
            userRequestToInsurance: {
                type: "object",
                properties: {
                    insurancefrom: {
                        type: "string",
                        description: "User insurance from",
                        example: "rssb"
                    },
                    insuranceto: {
                        type: "string",
                        description: "User insurance to",
                        example: "mituele"
                    },
                    scheduledate: {
                        type: "string",
                        description: "User appointment schedule date",
                        example: "8-8-2022"
                    },
                    hourschedule: {
                        type: "string",
                        description: "User appointment schedule hour",
                        example: "8:00"
                    },
                    hqaddress: {
                        type: "string",
                        description: "User address",
                        example: "kanombe"
                    }
                }
            },

            userRequestManagement: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        description: "User schedule request status",
                        example: "approved"
                    },
                }
            },

            feedBack: {
                type: "object",
                properties: {
                    feedBack: {
                        type: "string",
                        description: "Insurance feedback to the user",
                        example: "You have been transfered from rssb to mituele successfully"
                    },
                }
            },
            
            // error model
            Error: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not Found"
                    },
                    internal_code: {
                        type: "string",
                        description: "Error internal code",
                        example: "Invalid parameters"
                    }
                }
            }
        }
    }
}