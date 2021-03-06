import {utilService} from '../../services/util-service.js'

var gEmails;
const EMAILS_DB = 'emailsDB'

export const emailService ={
    getEmails,
    clearPeeked,
    sendNewEmail,
    removeEmail,
    getEmailById,
    getUnreadCount,
    updateStared,
    updateDraft,
    updateRead
}

 function getEmails(){
        gEmails = utilService.loadFromStorage(EMAILS_DB);
        if (!gEmails || !gEmails.length){
            gEmails = _createEmails()
            utilService.storeToStorage(EMAILS_DB,getEmails)
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
        id : utilService.makeId(),
        name,
        subject,
        body,
        sentAt,
        fromEmail: 'codingAcademy@code.com',
        isRead: false,
        isPeeked: false,
        isStared: false,
        isDraft:false,
        isSent: false
    }
    return email
}
function _createEmails(){
    const emails = []
    emails.push(_createEmail('Muki','Hello',utilService.makeLorem(20),utilService.getTime()))
    emails.push(_createEmail('Puki','THE trip',utilService.makeLorem(5),utilService.getTime()))
    emails.push(_createEmail('Yaron','Amazing!',utilService.makeLorem(10),utilService.getTime()))
    emails.push(_createEmail('Asaf','How are you?',utilService.makeLorem(20),utilService.getTime()))
    emails.push(_createEmail('Omer','Want to meet you',utilService.makeLorem(18),utilService.getTime()))
    emails.push(_createEmail('Coding Academy','Hello',utilService.makeLorem(30),utilService.getTime()))
    emails.push(_createEmail('SPORT5','Football Fantasy',utilService.makeLorem(40),utilService.getTime()))
    emails.push(_createEmail('Dennis','Hello',utilService.makeLorem(33),utilService.getTime()))
    emails.push(_createEmail('Ben','Crime Minister',utilService.makeLorem(22),utilService.getTime()))
    emails.push(_createEmail('Dor','Meeting',utilService.makeLorem(27),utilService.getTime()))
    emails.push(_createEmail('Walla','New at Email',utilService.makeLorem(3),utilService.getTime()))
    return emails;
}
function sendNewEmail(email){
    email.id = utilService.makeId();
    email.name ='Me';
    email.isRead = false;
    email.isSent = true
    email.isStared = false
    email.isPeeked = false;
    email.sentAt = utilService.getTime();
    email.isDraft = false
    gEmails.unshift(email)
    utilService.storeToStorage(EMAILS_DB,gEmails);
    return Promise.resolve(email);
}
function updateDraft(email){
    email.id = utilService.makeId();
    email.name ='Me';
    email.isRead = false;
    email.isSent = false
    email.isPeeked = false;
    email.sentAt = utilService.getTime();
    email.isDraft = true
    email.isStared= false
    gEmails.unshift(email)
    utilService.storeToStorage(EMAILS_DB,gEmails);
    return Promise.resolve(email);
}
function removeEmail(emailId){
    const emailIdx = gEmails.findIndex(email => email.id === emailId);
    gEmails.splice(emailIdx, 1);
    utilService.storeToStorage(EMAILS_DB,gEmails);
}
function findIndexById(id){
    console.log(id);
    return gEmails.findIndex((email) => email.id === id)
    }
function updateStared(emailId){
    const idx = findIndexById(emailId)
    gEmails[idx].isStared =!gEmails[idx].isStared
    console.log(idx);
    console.log('emailUpdate');
    utilService.storeToStorage(EMAILS_DB,gEmails)
}
function updateRead(emailId){
    const idx = findIndexById(emailId)
    gEmails[idx].isRead =!gEmails[idx].isRead
    console.log(idx);
    console.log('emailUpdate');
    utilService.storeToStorage(EMAILS_DB,gEmails)
}

 function clearPeeked() {
    gEmails.forEach(mail => mail.isPeeked = false);
   utilService.storeToStorage(EMAILS_DB, gEmails);
}
function getEmailById(emailId){
    console.log(emailId);
    const emailEx = gEmails.find(email => email.id === emailId)
    return Promise.resolve(emailEx)
}