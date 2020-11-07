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
    console.log(link, link.includes('http://www.youtube.com/watch?v='));
    return link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
}

function _createNotes() {
    return [
        {
            id: utilService.makeId(),
            type: 'noteTxt',
            title: '',
            isPinned: false,
            info: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            title: 'My dog!',
            isPinned: false,
            info: 'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_581/master/969.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a368f449b1cc1f37412c07a1bd901fb5',
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteTodos',
            title: 'Shopping list',
            isPinned: false,
            info: [
                { id: utilService.makeId(), txt: "Milk", doneAt: null, isDone: false },
                { id: utilService.makeId(), txt: "Tomatos", doneAt: null, isDone: false },
                { id: utilService.makeId(), txt: "Pancakes", doneAt: null, isDone: true },
                { id: utilService.makeId(), txt: "PS5", doneAt: null, isDone: false },
            ],
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteVideo',
            title: '',
            isPinned: false,
            info: 'https://www.youtube.com/embed/f-Wypwi9UBc',
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            title: 'Good times with the gang!',
            isPinned: false,
            info: 'https://images.unsplash.com/photo-1513309914637-65c20a5962e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteTodos',
            title: 'My todos!',
            isPinned: false,
            info: [
                { id: utilService.makeId(), txt: "Call Dennis", doneAt: null, isDone: false },
                { id: utilService.makeId(), txt: "Learn CSS", doneAt: null, isDone: true },
                { id: utilService.makeId(), txt: "Watch Vue tutorial", doneAt: null, isDone: false },
            ],
            color: '',
            isColorpicker: false
        },
        {
            id: utilService.makeId(),
            type: 'noteTxt',
            title: '',
            isPinned: false,
            info: 'The trouble with programmers is that you can never tell what a programmer is doing until its too late.',
            color: '',
            isColorpicker: false
        },
    ];
}
