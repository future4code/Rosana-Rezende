export const addTask = () => {
    return {
        type: "ADD_TASK"
    };
};

export const removeTask = () => {
    return {
        type: "REMOVE_TASK"
    };
};

export const markTaskAsComplete = () => {
    return {
        type: "MARK_TASK_AS_COMPLETE"
    };
};

export const deselectTaskAsComplete = () => {
    return {
        type: "DESELECT_TASK_AS_COMPLETE"
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

export const selectTaskByType = () => {
    return {
        type: "SELECT_TASK_BY_TYPE"
    };
};
