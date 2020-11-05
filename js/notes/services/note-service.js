import { utilService } from '../../services/util-service.js'
const NOTES_DB = 'notesDB'

export const noteService = {
    createNote,
    getNotes,
    editNote
}

var gNotes;

function editNote() {
    utilService.storeToStorage(NOTES_DB,gNotes)
}

function _getNoteById(id) {
    let note =  gNotes.find(note => note.id === id)
    return note;
}

function addNewNote(note) {
    gNotes.unshift(note);
    utilService.storeToStorage(NOTES_DB, gNotes);
    return Promise.resolve(gNotes);
}

function createNote(type, info) {
    let note = {
        id: utilService.makeId(),
        type,
        title: '',
        info,
        isPinned: false,
        style: {
            backgroundColor: ''
        }
    }
    addNewNote(note);
}

function getNotes() {
    gNotes = utilService.loadFromStorage(NOTES_DB);
    if (!gNotes || !gNotes.length) gNotes = _createNotes();
    return Promise.resolve(gNotes);
}

function _createNotes() {
    return [
        {
            type: 'noteTxt',
            title: '',
            isPinned: true,
            info: 'text',
            style: {
                backgroundColor: ''
            }
        },
        {
            type: 'noteImg',
            title: '',
            isPinned: true,
            info: 'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_581/master/969.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a368f449b1cc1f37412c07a1bd901fb5',
            style: {
                backgroundColor: ''
            }
        },
        {
            type: 'noteTodos',
            title: '',
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
            type: 'noteVideo',
            title: '',
            isPinned: true,
            info: 'https://www.youtube.com/watch?v=hOVDNS0IvHc',
            style: {
                backgroundColor: ''
            }
        }
    ];
}


const youtubeApi = 'AIzaSyBoLtEChz15MVeSaLwOi2dGrKfyVlBZkp0';

