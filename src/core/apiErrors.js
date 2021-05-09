/*
Client and Server Error Overview
Client errors, or HTTP status codes from 400 to 499, are the result of HTTP requests sent by a user client (i.e. a web browser or other HTTP client).
Even though these types of errors are client-related, it is often useful to know which error code a user is encountering to determine if the potential
issue can be fixed by server configuration. Server errors, or HTTP status codes from 500 to 599, are returned by a web server when it is aware that an
error has occurred or is otherwise not able to process the request.
*/

export class BadRequestError extends Error {
  /*400 Bad Request
    The 400 status code, or Bad Request error, means the HTTP request that was sent to the server has invalid syntax.
    Here are a few examples of when a 400 Bad Request error might occur:
    The user’s cookie that is associated with the site is corrupt. Clearing the browser’s cache and cookies could solve this issue
    Malformed request due to a faulty browser
    Malformed request due to human error when manually forming HTTP requests (e.g. using curl incorrectly)
  */
  constructor(message = "Bad Request error", errorsList) {
    super(message, errorsList);
    this.statusCode = 400;
    this.errorsList = errorsList;
  }
}

export class UnauthorizedError extends Error {
  /*401 Unauthorized
    The 401 status code, or an Unauthorized error, means that the user trying to access the resource has not been authenticated
    or has not been authenticated correctly. This means that the user must provide credentials to be able to view the protected resource.
    An example scenario where a 401 Unauthorized error would be returned is if a user tries to access a resource that is protected
    by HTTP authentication, as in this Nginx tutorial. In this case, the user will receive a 401 response code until they provide a valid
    username and password (one that exists in the .htpasswd file) to the web server.
  */
  constructor(message) {
    super(message);
    this.statusCode = 401
  }
}

export class NotFoundError extends Error {
  /*404 Not Found
    The 404 status code, or a Not Found error, means that the user is able to communicate with the server but it is unable to locate the requested file or resource.
    404 errors can occur in a large variety of situations. If the user is unexpectedly receiving a 404 Not Found error, here are some questions to ask while troubleshooting:
    Does the link that directed the user to your server resource have a typographical error in it?
    Did the user type in the wrong URL?
    Does the file exist in the correct location on the server? Was the resource was moved or deleted on the server?
    Does the server configuration have the correct document root location?
    Does the user that owns the web server worker process have privileges to traverse to the directory that the requested file is in? (Hint: directories require read and execute permissions to be accessed)
    Is the resource being accessed a symbolic link? If so, ensure the web server is configured to follow symbolic links
   */
  constructor(message) {
    super(message);
    this.statusCode = 404
  }
}

export class ForbiddenError extends Error {
  /*403 Forbidden
    The 403 status code, or a Forbidden error, means that the user made a valid request but the server is refusing to serve the
    request, due to a lack of permission to access the requested resource. If you are encountering a 403 error unexpectedly,
    there are a few typical causes that are explained here.
  */
  constructor(message = "Forbidden Error") {
    super(message);
    this.statusCode = 403
  }
}

export class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500
  }
}