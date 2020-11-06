export const utilService = {
    storeToStorage,
    loadFromStorage,
    makeId,
    getTime,
    makeLorem
}

function storeToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 8) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getTime() {
    return new Date().toLocaleTimeString()
}



function makeLorem(size = 10) {
    var words = ['The sky', 'above', 'was', 'the color of television', 'tuned', 'to', '.', 'Where', 'Done', 'ten', 'Bro', 'Dennis', 'Omer', 'What was it', 'done like a pro', 'good bye friend', 'for now.', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}