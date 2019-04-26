import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import './db';
// Import data model
import './models/Todos';
import routes from './routes';

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

// Handle API requests with our routes - version 1
app.use('/v1/todos', routes);

app.listen(port, () => {
  /* eslint-disable */
  console.log(`Started up at port ${port}`);
  /* eslint-enable */
});
