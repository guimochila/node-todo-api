import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import './db';
import { developmentErrors } from './handlers/errorHandler';
import authenticate from './middleware/authenticate';
import todoRouter from './resources/todo/todo.router';
import userRouter from './resources/user/user.router';

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const port = process.env.PORT;

// Handle API requests with our routes - version 1
app.use('/v1/user', userRouter);
app.use('/v1/todos', authenticate, todoRouter);

// Error handlers
app.use(developmentErrors);

app.listen(port, () => {
  /* eslint-disable */
  console.log(`Started up at port ${port}`);
  /* eslint-enable */
});
