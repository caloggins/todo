export const TASK_ADDED = 'TASK_ADDED'

export default function addTask(description){
    return dispatch => {
        dispatch({
            type: TASK_ADDED,
            body: description
        })
    }
}