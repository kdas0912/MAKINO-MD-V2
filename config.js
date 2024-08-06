const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["—♪♪♪ 𝐎𝐆𝐆𝐘••• ♥️🧿🌼"];
global.OwnerNumber = ["916294147874"];
global.ownertag = ["—♪♪♪ 𝐎𝐆𝐆𝐘••• ♥️🧿🌼"]; 
global.OwnerName =  "—♪♪♪ 𝐎𝐆𝐆𝐘••• ♥️🧿🌼";
global.BotName = "—♪♪♪ 𝐎𝐆𝐆𝐘••• ♥️🧿🌼—MD";
global.packname = "—♪♪♪ 𝐎𝐆𝐆𝐘••• ♥️🧿🌼";                             //Do not change.
global.author = "𝐷𝐴𝑅𝐸  𝐷𝐴𝑉𝐼𝐿 ♡⁠‿⁠♡";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/JoyLnRV3KjgEcWeyZ3673D"; 
global.SupportGroupLink = "https://chat.whatsapp.com/JoyLnRV3KjgEcWeyZ3673D"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/919832962298"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || '{"noiseKey":{"private":{"type":"Buffer","data":"gKBTReYsLXhvAF3tbhGRrF6MReJpjuZUm/YrU5rls0I="},"public":{"type":"Buffer","data":"YcPOkn6zPBPU5Z+ADm1gDeqkLYVj21gTm0hIeGUrnBQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aGDesuaDSJSe7Wo8/eCcHqwFLt7SHs0p9gIURDYYn3k="},"public":{"type":"Buffer","data":"3KMh+wrToAW6RHot/ZkYlPO2lsFvsSSJg7wxkpVQEgA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"6BnxKx7sXPa62uWKsWzIIPDF6Nnrocufq+XBGX5gVWs="},"public":{"type":"Buffer","data":"Nknod4lnRWeU0JBNqFeAJ2gN3vfGmN3lv6oNVRJgkEU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"KBFo7IsTtOC7xgQtprcpixyH/qhDH16QWZTGh8Pt6G0="},"public":{"type":"Buffer","data":"/TKyviExpak0zmLs7ueTw3D/1whaFgc+h5JsTB4Y9lE="}},"signature":{"type":"Buffer","data":"KWHvsgO8fLS6HRO360TrqqUubij4l8Q0XrzzevJ2gNSlmxKJkRQKvgEjeun3QlKjdzjniaLYc3HQPHy8JuprDA=="},"keyId":1},"registrationId":49,"advSecretKey":"H2RREuuDJLtSB5gGznYZ9V9xaNyej7Sglv5SwSMGXc4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"WwR4Z-QnSoCtVcMsJdzLKg","phoneId":"9749423c-8015-4419-80ce-17754bc5d8d2","identityId":{"type":"Buffer","data":"BxVbBJhjl3qMbNGx4P6yGseo/BY="},"registered":true,"backupToken":{"type":"Buffer","data":"vi1lLUqk+dj3E6iQO4KPzbS1nXg="},"registration":{},"pairingCode":"RMDJ24G2","me":{"id":"916294147874:45@s.whatsapp.net"},"account":{"details":"CJOV1/cFEOLrx7UGGAQgACgA","accountSignatureKey":"Qgx4B9SvRGW1R64EdzW7hC8ZczRKtoN5g0ui5ISCThA=","accountSignature":"IlmIrL6DEjebH6Glu6+w6COe++a8yjdIukk/7P1k1dx5+hNEocggBCo3qeu4/U/vzGcRGjYGKv/f2v/UE5//Bg==","deviceSignature":"9FDQMxOT9eBFOfyr2vvLmQI2JGRolYNgPq8Edl0guW7n2bqpshcRAQA0El2ZVvexJdSD0fRajiKCypfKKYuRDA=="},"signalIdentities":[{"identifier":{"name":"916294147874:45@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUIMeAfUr0RltUeuBHc1u4QvGXM0SraDeYNLouSEgk4Q"}}],"platform":"android","lastAccountSyncTimestamp":1722938863,"myAppStateKeyId":"AAAAADRO"}'
global.prefa = ["."]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
