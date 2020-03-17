export const addTask = (text) => {
    return {
        type: "ADD_TASK",
        text
    };
};

export const removeTask = (id) => {
    return {
        type: "REMOVE_TASK",
        id
    };
};

export const editTask = (id, text) => {
    return {
        type: "EDIT_TASK",
        id,
        text
    };
};

export const markTaskAsComplete = (id) => {
    return {
        type: "MARK_TASK_AS_COMPLETE",
        id
    };
};

// export const deselectTaskAsComplete = () => {
//     return {
//         type: "DESELECT_TASK_AS_COMPLETE"
//     };
// };

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
        filter
    };
};
