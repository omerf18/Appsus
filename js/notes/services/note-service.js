import { utilService } from '../../services/util-service.js'
const NOTES_DB = 'notesDB'

export const noteService = {
    createNote,
    getNotes,
    editNote,
    removeNote
}

var gNotes;

function removeNote(noteId) {
    // let note = _getNoteById(noteId)
    // console.log('ths is itL', note);
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(idx, 1);
    utilService.storeToStorage(NOTES_DB, gNotes);
    return Promise.resolve();
}

function editNote() {
    utilService.storeToStorage(NOTES_DB, gNotes)
}

function _getNoteById(id) {
    let note = gNotes.find(note => note.id === id)
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
            id: utilService.makeId(),
            type: 'noteTxt',
            title: '',
            isPinned: true,
            info: 'text',
            style: {
                backgroundColor: ''
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            title: '',
            isPinned: true,
            info: 'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_581/master/969.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a368f449b1cc1f37412c07a1bd901fb5',
            style: {
                backgroundColor: ''
            }
        },
        {
            id: utilService.makeId(),
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
            id: utilService.makeId(),
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

