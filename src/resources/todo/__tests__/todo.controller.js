import { addTodo } from '../todo.controller';
import TodoService from '../todo.services';

const req = {};
const res = {
  status: jest.fn(),
  json: jest.fn(todo => {
    return {
      data: { todo },
    };
  }),
};
const next = jest.fn();

const createTodo = jest
  .spyOn(TodoService, 'createTodo')
  .mockImplementation(todo => todo);

beforeEach(() => {
  createTodo.mockClear();
});

describe('[TodoController]', () => {
  test('It should return 400 on invalid data', async () => {
    await addTodo(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  test('It should return 201 with valid data', async () => {
    const todo = { text: 'Test todo' };

    req.body = todo;

    await addTodo(req, res, next);

    expect(createTodo).toHaveBeenCalledTimes(1);
    expect(createTodo).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
  });
});
