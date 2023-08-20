import 'dotenv/config';
import Express from 'express';

const server = Express();
const port = String(process.env.SERVER_PORT) || String(process.env.PORT);

server.listen(port, () => console.log(`Server running on port ${port}`));
