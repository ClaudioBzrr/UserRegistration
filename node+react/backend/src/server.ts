import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@': `${__dirname}/`,
  '@entities': `${__dirname}/entities`,
  '@repositories': `${__dirname}/repositories`,
  '@use-cases': `${__dirname}/use-cases`,
  '@controllers': `${__dirname}/controllers`,
});

import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const port = String(process.env.SERVER_PORT) || String(process.env.PORT);
const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`Server running on port ${port}`));
