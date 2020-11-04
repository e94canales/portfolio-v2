const initState = {
    modalActive: false,
    modalType: null,
}

export const homeReducer = (state = initState, action) => {

    switch (action.type) {

        case 'SET_MODAL_TYPE':
            return {...state, modalType: action.payload}

        case 'TOGGLE_MODAL_ACTIVE':
            if (action.payload === null) {
                return {...state, modalActive: !state.modalActive}
            } else {
                return {...state, modalActive: action.payload}
            }
    

        default:
            return state
    }
}