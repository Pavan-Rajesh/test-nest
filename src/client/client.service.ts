import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ClientService {
  private readonly logger = new Logger(ClientService.name, {
    timestamp: true,
  });

  constructor() {}
  getSession() {
    this.logger.error('getSession called');
    this.logger.log({ message: 'getSession called' });
    this.logger.warn('getSession called');
    this.logger.debug('getSession called', 'hello');
    this.logger.verbose('getSession called');
    try {
      throw new Error('getSession error');
    } catch (err) {
      const e = err instanceof Error ? err : new Error(String(err));
      this.logger.error(
        'An error occurred in getSession',
        e.stack,
        ClientService.name,
      );
    }
  }
}
