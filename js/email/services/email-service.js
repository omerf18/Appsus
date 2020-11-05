// import {utilService} from '../services/util-service.js'

var gEmails;
const EMAILS_DB = 'emailsDB'

export const emailService ={
    getEmails,
    clearPeeked,
    sendNewEmail,
    removeEmail,
    getEmailById,
    getUnreadCount
}

 function getEmails(){
        gEmails = loadFromStorage(EMAILS_DB);
        if (!gEmails || !gEmails.length){
            gEmails = _createEmails()
            storeToStorage(EMAILS_DB,getEmails)
        } 
        return Promise.resolve(gEmails);
 }

 function getUnreadCount() {
    var count = 0;
    gEmails.forEach(email => {
        if (!email.isRead ) count++
    })
    return count;
}



function _createEmail(name,subject,body,sentAt){
    const email = {
        id : makeId(),
        name,
        subject,
        body,
        sentAt,
        fromEmail: 'codingAcademy@code.com',
        isRead: false,
        isPeeked: false,
        isStared: false,
        isSent: false
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
function sendNewEmail(email){
    email.id = makeId();
    email.name ='Me';
    email.isRead = false;
    email.isSent = true
    email.sentAt = getTime();
    email.isPeeked = false;
    gEmails.unshift(email)
    storeToStorage(EMAILS_DB,gEmails);
    return Promise.resolve(email);
}
function removeEmail(emailId){
    const emailIdx = gEmails.findIndex(email => email.id === emailId);
    gEmails.splice(emailIdx, 1);
    storeToStorage(EMAILS_DB,gEmails);
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
 function clearPeeked() {
    gEmails.forEach(mail => mail.isPeeked = false);
   storeToStorage(EMAILS_DB, gEmails);
}
function getEmailById(emailId){
    console.log(emailId);
    const emailEx = gEmails.find(email => email.id === emailId)
    return Promise.resolve(emailEx)
}