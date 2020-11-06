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
    updateEmail
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
    emails.push(_createEmail('Puki','Hello',utilService.makeLorem(5),utilService.getTime()))
    emails.push(_createEmail('Yuki','Hello',utilService.makeLorem(10),utilService.getTime()))
    emails.push(_createEmail('Tuki','Hello',utilService.makeLorem(15),utilService.getTime()))
    return emails;
}
function sendNewEmail(email){
    email.id = utilService.makeId();
    email.name ='Me';
    email.isRead = false;
    email.isSent = true
    email.isPeeked = false;
    email.sentAt = utilService.getTime();
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
    return gEmails.findIndex((email) => email.id === id)
    }
function updateEmail(emailId,tag){
    const idx =findIndexById(emailId)
    gEmails[idx].tag = tag
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