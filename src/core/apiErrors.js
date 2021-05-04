
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    console.log(message)
    this.statusCode = 404
  }
}