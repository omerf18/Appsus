import { utilService } from '../../services/util-service.js'
const NOTES_DB = 'notesDB'

export const noteService = {
    createNote,
    getNotes,
    editNote,
    removeNote,
    updateTodo,
    colorNote
}

var gNotes;

function updateTodo(noteId, todoId) {
    let note = _getNoteById(noteId);
    let todo = note.info.find(todo => todo.id === todoId);
    if (todo.isDone === false)  {
        todo.isDone = true;
        todo.doneAt = _getTodoDoneAt();
    }
    else {
        todo.isDone = false;
        todo.doneAt = null;
    }
    utilService.storeToStorage(NOTES_DB, gNotes);
    return Promise.resolve(gNotes);
}

function _getTodoDoneAt() {
    let time = utilService.getTime();
    return time;
}

function removeNote(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(idx, 1);
    utilService.storeToStorage(NOTES_DB, gNotes);
    return Promise.resolve(gNotes);
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
    if (type === 'noteTodos') info = _createTodos(info);
    let note = {
        id: utilService.makeId(),
        type,
        title: '',
        info,
        isPinned: false,
        color: ''
    }
    addNewNote(note);
}

function colorNote(noteId, color) {
    let note = _getNoteById(noteId);
    note.color = color;
    utilService.storeToStorage(NOTES_DB, gNotes);
    return Promise.resolve(gNotes);

}

function _createTodos(str) {
    let todos = str.split(',');
    let newTodos = todos.map(todo => {
        let todoObj = { id: utilService.makeId(), txt: '', doneAt: null, isDone: false }
        todoObj.txt = todo;
        todo = todoObj;
        return todo;
    });
    return newTodos;
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
            color: ''
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            title: '',
            isPinned: true,
            info: 'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_581/master/969.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a368f449b1cc1f37412c07a1bd901fb5',
            color: ''
        },
        {
            id: utilService.makeId(),
            type: 'noteTodos',
            title: '',
            isPinned: true,
            info: [
                { id: utilService.makeId(), txt: "Do that", doneAt: null, isDone: false },
                { id: utilService.makeId(), txt: "Do this", doneAt: null, isDone: false }
            ],
            color: ''
        },
        {
            id: utilService.makeId(),
            type: 'noteVideo',
            title: '',
            isPinned: true,
            info: 'https://www.youtube.com/watch?v=hOVDNS0IvHc',
            color: ''
        }
    ];
}


const youtubeApi = 'AIzaSyBoLtEChz15MVeSaLwOi2dGrKfyVlBZkp0';

