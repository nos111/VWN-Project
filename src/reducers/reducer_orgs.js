export default function (state, action) {
    let orgs = {all: [
        {
            title:'VWN', 
            description: 'Helps refugee get to a language school',
            position: {lat: 52.204690,lng: 5.294996},
            tags: ['refugees', 'help', 'language']
        }, 
        {
            title:'HackYourFuture', 
            description: 'Teaches coding to refugees',
            position: {lat: 52.313015, lng: 4.670804},
            tags: ['refugees', 'coding', 'education']
        }, 
        {
            title:'RefugeeStart force', 
            description: 'Helps you find a job',
            position: {lat: 52.080458,lng: 5.650937},
            tags: ['refugees', 'jobs', 'news']
        },
        {
            title:'Top Taal', 
            description: 'Language school',
            position: {lat: 52.085525,lng: 4.566032},
            tags: ['language', 'education']
        },
        {
            title:'UVA', 
            description: 'Language school',
            position: {lat: 52.871726,lng: 5.895377},
            tags: ['language', 'education']
        }
    ],
    active: [
        {
            title:'VWN', 
            description: 'Helps refugee get to a language school',
            position: {lat: 52.204690,lng: 5.294996},
            tags: ['refugees', 'help', 'language']
        }, 
        {
            title:'HackYourFuture', 
            description: 'Teaches coding to refugees',
            position: {lat: 52.313015, lng: 4.670804},
            tags: ['refugees', 'coding', 'education']
        }, 
        {
            title:'RefugeeStart force', 
            description: 'Helps you find a job',
            position: {lat: 52.080458,lng: 5.650937},
            tags: ['refugees', 'jobs', 'news']
        },
        {
            title:'Top Taal', 
            description: 'Language school',
            position: {lat: 52.085525,lng: 4.566032},
            tags: ['language', 'education']
        },
        {
            title:'UVA', 
            description: 'Language school',
            position: {lat: 52.871726,lng: 5.895377},
            tags: ['language', 'education']
        }
    ]};

    switch(action.type) {
        case 'ACTIVATE-TAG':
            orgs.active = action.payload.activeOrgs;
            return orgs;
    }
    
    return orgs;
};
