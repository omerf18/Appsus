import { utilService } from '../../services/util-service.js';
import { eventBus } from '../../services/event-bus.js';

const NOTES_DB = 'notesDB'

export const noteService = {
    createNote,
    getNotes,
    editNote,
    removeNote,
    updateTodo,
    colorNote,
    pinNote,
    openColorpick
}

var gNotes;

function pinNote(noteId) {
    let note = _getNoteById(noteId);
    if (note.isPinned === false) {
        note.isPinned = true;
        let pinnedNote = note;
        const idx = gNotes.findIndex(note => note.id === noteId);
        gNotes.splice(idx, 1);
        gNotes.unshift(pinnedNote);
    } else note.isPinned = false;
    eventBus.$emit('show-msg',{txt:'Note pinned' ,type:'Success'})
    utilService.storeToStorage(NOTES_DB, gNotes);
    return Promise.resolve(gNotes);
}

function updateTodo(noteId, todoId) {
    let note = _getNoteById(noteId);
    let todo = note.info.find(todo => todo.id === todoId);
    if (todo.isDone === false) {
        todo.isDone = true;
        todo.doneAt = _getTodoDoneAt();
        eventBus.$emit('show-msg',{txt:'Done todo!' ,type:'Success'})
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
    eventBus.$emit('show-msg',{txt:'Note removed' ,type:'Success'})
    utilService.storeToStorage(NOTES_DB, gNotes);
    return Promise.resolve(gNotes);
}

function openColorpick(noteId) {
    let note = _getNoteById(noteId);
    if (note.isColorpicker === false) note.isColorpicker = true;
    else note.isColorpicker = false;
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
    eventBus.$emit('show-msg',{txt:'New note has been added!' ,type:'Success'})
    utilService.storeToStorage(NOTES_DB, gNotes);
    return Promise.resolve(gNotes);
}

function createNote(type, info) {
    if (type === 'noteTodos') info = _createTodos(info);
    else if (type === 'noteVideo') info = _createYouTubeEmbedLink(info);
    let note = {
        id: utilService.makeId(),
        type,
        title: '',
        info,
        isPinned: false,
        color: '',
        isColorpicker: false
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

function _createYouTubeEmbedLink(link) {
    return link.replace('http://www.youtube.com/watch?v=', 'http://www.youtube.com/embed/');
}

function _createNotes() {
    return [
        {
            id: utilService.makeId(),
            type: 'noteTxt',
            title: '',
            isPinned: false,
            info: 'text',
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            title: '',
            isPinned: false,
            info: 'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_581/master/969.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a368f449b1cc1f37412c07a1bd901fb5',
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteTodos',
            title: '',
            isPinned: false,
            info: [
                { id: utilService.makeId(), txt: "Do that", doneAt: null, isDone: false },
                { id: utilService.makeId(), txt: "Do this", doneAt: null, isDone: false }
            ],
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteVideo',
            title: '',
            isPinned: false,
            info: 'https://www.youtube.com/watch?v=hOVDNS0IvHc',
            color: '',
            isColorpicker: false
        }
    ];
}


const youtubeApi = 'AIzaSyBoLtEChz15MVeSaLwOi2dGrKfyVlBZkp0';
