const listAllMessages = {
    tags:['Message'],
    description:"List all users",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const SendMessage = {
tags:['Message'],
description:"Create a User",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"user email",
                        example:"test@gmail.com"
                    },
                    message:{
                        type:"string",
                        description:"user message",
                        example:"Hi i need help"
                    },
                    names:{
                        type:"string",
                        description:"user name",
                        example:"nambaje edwin"
                    },
                    phone:{
                        type:"Number",
                        description:"user number",
                        example:"0787441511"
                    },
                }
            }
        }
    }
},
responses:{
    200:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}


const getMessageById = {
tags:['Message'],
description:"Get the Message by id",
// security: [
//     {
//       token: [],
//     },
// ],
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of message",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
responses:{
    200:{
        description:"OK",
        content:{
             "application/json":{
                type:'object',
                example:{
                    status:"success",
                    data:[]
                }
             }
        }
    }
}
}

const deleteMessageById = {
tags:['Message'],
description:"Delete the message by id",
// security: [
//     {
//       token: [],
//     },
// ],
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
responses:{
    200:{
        description:"OK",
        content:{
             "application/json":{
                type:'object',
                example:{
                    status:"success",
                    data:[]
                }
             }
        }
    }
}
}

const updateMessageById = {
tags:['Message'],
description:"Update message by id",
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of message",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"user email",
                        example:"diamond@gmail.com"
                    },
                    message:{
                        type:"string",
                        description:"user email",
                        example:"diamond"
                    },
                    names:{
                        type:"string",
                        description:"user password",
                        example:"12345"
                    },
                    phone:{
                        type:"string",
                        description:"role of the user",
                        example:"90899979797"
                    }
                }
            }
        }
    }
},
responses:{
    200:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}

exports.messageRouteDocs = {
"/api/message/create":{
    post:SendMessage,
},
 "/api/message":{
    get:listAllMessages,
},
"/api/message/{id}":{
    get:getMessageById,
},
"/api/message/delete/{id}":{
    delete:deleteMessageById,
},
"/api/message/update/{id}":{
    put:updateMessageById,
}
};