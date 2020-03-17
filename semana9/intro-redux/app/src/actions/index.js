// Pedido feito ao caixa (avisa pra todos que EU quero...)

export const addTask = (text) => {
    return {
        type: "ADD_TASK",
        // text
        payload: {
            text: text
        }
    };
};

export const removeTask = (id) => {
    return {
        type: "REMOVE_TASK",
        // id
        payload: {
            id: id
        }
    };
};

export const editTask = (id, text) => {
    return {
        type: "EDIT_TASK",
        id,
        // text
        payload: {
            text: text,
            id: id
        }
    };
};

export const markTaskAsComplete = (id) => {
    return {
        type: "MARK_TASK_AS_COMPLETE",
        // id
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
        // filter
        payload: {
            filter: filter
        }
    };
};
