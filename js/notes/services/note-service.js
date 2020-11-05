export const notesService = {

}

let notes = [
    {
        type: 'txt',
        title: 'title',
        isPinned: true,
        info: 'text',
        style: {
            backgroundColor: ''
        }
    },
    {
        type: 'img',
        title: 'title',
        isPinned: true,
        info: 'www.imgUrl.com',
        style: {
            backgroundColor: ''
        }
    },
    {
        type: 'todos',
        title: 'title',
        isPinned: true,
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ],
        },
        style: {
            backgroundColor: ''
        }

    },
    {
        type: 'video',
        title: 'title',
        isPinned: true,
        info: 'www.youtube.com',
        style: {
            backgroundColor: ''
        }
    }
];

const youtubeApi = 'AIzaSyBoLtEChz15MVeSaLwOi2dGrKfyVlBZkp0';

