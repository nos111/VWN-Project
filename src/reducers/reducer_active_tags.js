export default function (state = null, action) {
    switch(action.type) {
        case 'ACTIVATE-TAG':
            return action.payload;
    }
    return state;
}