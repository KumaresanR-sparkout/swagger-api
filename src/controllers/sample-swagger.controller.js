import * as response from '../utils/response.util'
export const swaggerGetExample = async (req, res) => {
    try {

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
        /*  #swagger.parameters['body'] = {
                    in: 'body',
                    required: true
            } */
        return response.sendSuccess(res, 200, 'swagger example route called', [req.body])
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}