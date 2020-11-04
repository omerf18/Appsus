// import {utilService} from '../services/util-service.js'

var gEmails;
const EMAILS_DB = 'emailsDB'

export const emailService ={
    getEmails
}

 function getEmails(){
        gEmails = loadFromStorage(EMAILS_DB);
        if (!gEmails || !gEmails.length) gEmails = _createEmails()
        return Promise.resolve(gEmails);
 }
function _createEmail(name,subject,body,sentAt){
    const email = {
        id : makeId(),
        name,
        subject,
        body,
        isRead: Math.random() > 0.5,
        sentAt
    }
    return email
}
function _createEmails(){
    const emails = []
    emails.push(_createEmail('Muki','Hello','Hi my name is Muki',getTime()))
    emails.push(_createEmail('Puki','Hello','Hi my name is Puki',getTime()))
    emails.push(_createEmail('Yuki','Hello','Hi my name is Yuki',getTime()))
    emails.push(_createEmail('Tuki','Hello','Hi my name is Tuki',getTime()))
    return emails;


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
function getTime(){
    return new Date().toLocaleTimeString()
 }