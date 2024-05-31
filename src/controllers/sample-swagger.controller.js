import * as response from '../utils/response.util'
export const swaggerGetExample = async (req, res) => {
    try {
        /*  
        #swagger.tags = ['Users']
        #swagger.description='Get user Details'
         */
        return response.sendSuccess(res, 200, 'swagger example route called', [{
            swagger: ['swagger-auto-gen', 'swagger-ui-express']
        }])
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}

export const swaggerPostExample = async (req, res) => {
    try {
        /*  
        #swagger.tags = ['Users']
        #swagger.description='Register Data'
        */
        /* #swagger.security = [{
             "bearerAuth": []
     }] */
        /*  #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                            schema: {
                                "userName":"",
                                "email":""
                            } 
                    }
                }
            } 
        */

        // #swagger.responses[200] = { description: 'User registered successfully.' }
        console.log(req.header('Authorization'))
        return response.sendSuccess(res, 200, 'swagger example route called', [{...req.body,'toekn':req.header('Authorization')}])
    }
    catch (error) {
        // #swagger.responses[500] = { description: 'Server failure.'}
        return response.sendError(res, 500, error.message)
    }
}