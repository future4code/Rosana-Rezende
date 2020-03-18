// Pedido feito ao caixa (avisa pra todos que EU quero...)
import axios from "axios";

// Ações Síncronas

export const addTask = (text) => {
    return {
        type: "ADD_TASK",
        payload: {
            text: text
        }
    };
};

export const removeTask = (id) => {
    return {
        type: "REMOVE_TASK",
        payload: {
            id: id
        }
    };
};

export const editTask = (id, text) => {
    return {
        type: "EDIT_TASK",
        payload: {
            text: text,
            id: id
        }
    };
};

export const markTaskAsComplete = (id) => {
    return {
        type: "MARK_TASK_AS_COMPLETE",
        payload: {
            id: id
        }
    };
};

export const markAllTasksAsComplete = () => {
    return {
        type: "MARK_ALL_TASKS_AS_COMPLETE"
    };
};

export const removeCompleteTasks = () => {
    return {
        type: "REMOVE_COMPLETE_TASK"
    };
};

export const selectTaskByFilter = (filter) => {
    return {
        type: "SELECT_TASK_BY_FILTER",
        payload: {
            filter: filter
        }
    };
};

// Novas Ações Síncronas

export const setTasks = tasks => {
    return {
        type: "SET_TASKS",
        payload: {
            tasks: tasks
        }
    };
};

// Ações assíncronas

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/rosana/todos'

export const fetchTasks = () => async (dispatch, getState) => {
    const result = await axios.get(
        `${baseUrl}`
    );

    dispatch(setTasks(result.data.todos));
};

export const createTask = text => async (dispatch, getState) => {
    try {
        await axios.post(
            `${baseUrl}`,
            {
                text
            }
        );
        dispatch(fetchTasks());
    } catch (error) {
        console.log("Errinho lindo, preciso tratar.");
    }
};

