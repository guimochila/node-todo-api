import TodoService from '../../services/todo.services';

/**
 *  Add new Todos - method POST
 * */
export const addTodo = async (req, res, next) => {
  try {
    const todo = await TodoService.createTodo(req.body);
    return res.status(201).json({ data: { todo } });
  } catch (e) {
    e.status = 400;
    return next(e);
  }
};

/**
 *  Get Todos - method GET
 * */
export const getTodos = async (req, res, next) => {
  try {
    const todos = await TodoService.findTodos();
    return res.json({ data: { todos } });
  } catch (e) {
    e.status = 400;
    return next(e);
  }
};

/**
 *  Get Todo - method GET
 * */
export const getTodo = async (req, res, next) => {
  const { id } = req.params;

  try {
    const todo = await TodoService.findOneTodo(id);

    if (!todo) {
      return res.status(404).end();
    }

    return res.json({ data: { todo } });
  } catch (e) {
    return next(e);
  }
};

/**
 *  Remove Todo - method DELETE
 * */
export const removeTodo = async (req, res, next) => {
  const { id } = req.params;

  try {
    const todo = await TodoService.removeTodo(id);

    if (!todo) {
      return res.status(404).end();
    }

    return res.status(202).json({ data: { todo } });
  } catch (e) {
    return next(e);
  }
};

/**
 *  Update Todo - method PATCH
 * */
export const updateTodo = async (req, res, next) => {
  const { id } = req.params;

  try {
    const todo = await TodoService.updateTodo(id, req.body);

    if (!todo) {
      return res.status(404).end();
    }

    return res.status(201).json({ data: { todo } });
  } catch (e) {
    return next(e);
  }
};
