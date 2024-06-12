import { clientConfig as client1Config } from '../config/client1';
import { clientConfig as client2Config } from '../config/client2';

const configs: { [key: string]: typeof client1Config } = {
  client1: client1Config,
  client2: client2Config,
};

export const getClientConfig = (client: string): typeof client1Config => {
  return configs[client] ? configs[client] : configs['client1']; // default to client1 if no valid client
};
