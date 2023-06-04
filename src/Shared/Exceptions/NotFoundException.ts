export class NotFoundException extends Error {
    constructor(message = "Entity not found") {
      super(message);
      this.name = 'NotFoundException';
    }
  }
  