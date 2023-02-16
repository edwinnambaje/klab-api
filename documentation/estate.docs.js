const listAllEstates = {
    tags:['Estate'],
    description:"List all Estates",
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

const getEstateById = {
    tags:['Estate'],
    description:"Get Estate by id",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the estate",
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

const createEstate = {
    tags:['Estate'],
    description:"Create an Estate",
    security: [
        {
          token: [],
        },
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        province:{
                            type:"string",
                        },
                        district:{
                            type:"string",
                        },
                        street:{
                            type:"string",
                        },
                        price:{
                            type:"string",
                        },
                        beds:{
                            type:"number",
                        },
                        description:{
                            type:"string",
                        },
                        bath:{
                            type:"number",
                        },
                        LotSize:{
                            type:"string",
                        },
                        status:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of an estate"
                        },
                        image:{
                            type:"file",
                            description:"the image of an estate"
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

const deleteEstate = {
    tags:['Estate'],
    description:"Delete the Estate  by id",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of Estate",
            type:"string"
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

const updatedEstate = {
    tags:['Estate'],
    description:"Update an Estate",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of an Estate",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        Province:{
                            type:"string",
                        },
                        District:{
                            type:"string",
                        },
                        street:{
                            type:"string",
                        },
                        price:{
                            type:"string",
                        },
                        beds:{
                            type:"number",
                        },
                        description:{
                            type:"string",
                        },
                        bath:{
                            type:"number",
                        },
                        LotSize:{
                            type:"string",
                        },
                        status:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of an estate"
                        },
                        image:{
                            type:"file",
                            description:"the image of an estate"
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
const likeBlog = {
    tags:['Estate'],
    description:"Like an Estate",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of an Estate",
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
exports.estateRouteDocs = {
    "/api/estate/create":{
        post:createEstate
    },
    "/api/estate":{
        get:listAllEstates
    },
    "/api/estate/{id}":{
        get:getEstateById
    },
    "/api/estate/update/{id}":{
        patch:updatedEstate
    },
    "/api/estate/delete/{id}":{
        delete:deleteEstate
    },
    "/api/estate/like/{id}":{
        patch:likeBlog
    },
}