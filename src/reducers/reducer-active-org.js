export default function (state = null, action) {
    switch (action.type ) {
        case 'ORG_SELECTED':
            return action.payload;
    }
    return state;
}