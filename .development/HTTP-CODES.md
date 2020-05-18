# Main HTTP Status Codes

| Status Code | Message                                                                                                  |
| :---------: | :------------------------------------------------------------------------------------------------------- |
|             | **1xx Informational**                                                                                    |
| 100         | `Continue` - The initial part of a request has been received and has not yet been rejected by the server |
|             | **2xx Success**                                                                                          |
| 200         | `OK` - Standard response for successful HTTP request                                                     |
| 201         | `Created` - Request has been fulfilled. New resource created                                             |
| 204         | `No Content` - Request processed. No content returned                                                    |
|             | **3xx Redirection**                                                                                      |
| 301         | `Moved Permanently` - This and all future requests directed to the given URI                             |
| 304         | `Not Modified` - Resource has not been modified since last requested                                     |
|             | **4xx Client Error**                                                                                     |
| 400         | `Bad Request` - Request cannot be fulfilled due to bad syntax                                            |
| 401         | `Unauthorized` - Authentication is possible, but has failed                                              | 
| 403         | `Forbidden` - Server refuses to respond to request; as user does not have access to the resource         |
| 404         | `Not found` - Requested resource could not be found                                                      |
|             | **5xx Server Error**                                                                                     |
| 500         | `Gereneric error message` - The server encountered an unexpected condition                               |
| 501         | `Not Implemented` - Server does not recognize method or lacks ability to fulfill                         |
| 503         | `Service Unavailable` - Service is currently unavailable                                                 |
