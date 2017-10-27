export default function (state = null,action) {
    switch(action.type) {
        case 'ACTIVATE-TAG':
            return action.payload.tags;
    }
    return [
        {key: 'refugees', value: false},
        {key: 'help', value: false} , 
        {key: 'language', value: false},
        {key: 'coding', value: false}, 
        {key: 'education', value: false}, 
        {key: 'jobs', value: false}, 
        {key: 'news', value: false}
    ];
}