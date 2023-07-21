export const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{name: 'eddie'}, ...actionInfo.action.payload]
    const updateActionInfo = {
        ...actionInfo, 
        action: {...actionInfo.action, payload: featured}
    }
    next(updateActionInfo)
}

export const prefix = store => next => action => {
    const prefixed = action.action.payload.map( pokemon => ({
        ...pokemon,
        name: 'Poke: ' + pokemon.name
    }) )

    const updatedAction = {
        ...action,
        action: {...action.action, payload: prefixed}
    }
    next(updatedAction);
}