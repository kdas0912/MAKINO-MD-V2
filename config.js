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

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"eGeEc90jIfDTHGnlxfW1dbZOJ5jniNUUND87DUzq20A="},"public":{"type":"Buffer","data":"SoHMEjd7AfJw9c3/xCNZVnlHD12H2Ayy3NBCMKqWqDA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sHHtEk8JQrK6BczGBvz8KLhocJoIqVO1oTK6WWra4V8="},"public":{"type":"Buffer","data":"R50/n9Si5sqp77wKZhdEg5t5CCeOGHYQmuwoJMDiCiA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"gLFINKXczoD0cH4o2biW1lrj3rWMb/NrKh38F22PPkg="},"public":{"type":"Buffer","data":"xPFdPHOkO5eaIK0TEdBPAyK6+guVdPuDFdVUcRvvMwU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UKtAO6Tx4PsuDjusltRLfXWXON2luCIYvZ6Pb1Sb+lc="},"public":{"type":"Buffer","data":"PPf1KKwqASYvuWP02FTZY2g9lrSQsEEmXTNDhqSc8Rc="}},"signature":{"type":"Buffer","data":"smbwXwLzNKD94MncEtBUqF1wjXzy/gy4IT9vgevibrfLNf3b+XNXi1WXAmFvtwzNasyoSI4h8igcekZOjsk5gg=="},"keyId":1},"registrationId":75,"advSecretKey":"ahmwiindOVKRGRm4Gzri1TPqbWp8yHaH+3FR2aw76MM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"uxyhIaZtSFKXLBgTdHCQRA","phoneId":"48622c86-bf7a-474e-b5b6-dd4afabd6a37","identityId":{"type":"Buffer","data":"Mw3FHfsI3+8W9i9/V8cA9oeh16c="},"registered":true,"backupToken":{"type":"Buffer","data":"UN6px6dFyPygH1OZQ7La+eU8ttI="},"registration":{},"pairingCode":"KV89CQ4S","me":{"id":"916294147874:44@s.whatsapp.net"},"account":{"details":"CJOV1/cFEKnfx7UGGAMgACgA","accountSignatureKey":"Qgx4B9SvRGW1R64EdzW7hC8ZczRKtoN5g0ui5ISCThA=","accountSignature":"66ImLGzSvhI6iDfeuE6QmMmsj+pQm35CSv8Dm+WJLDT6Z5uVjjczqtyFhWtzuxBtbMjupdOZoYEAACE8BlP0DA==","deviceSignature":"o/xsX79DiWdx3MlscPoFdnmjPQ4MBOPKDqKR+LXv9hCMDxNb3VVIVrEAYSFOU75pMmF7Sn3eyThc7StTKSoriQ=="},"signalIdentities":[{"identifier":{"name":"916294147874:44@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUIMeAfUr0RltUeuBHc1u4QvGXM0SraDeYNLouSEgk4Q"}}],"platform":"android","lastAccountSyncTimestamp":1722937270,"myAppStateKeyId":"AAAAADRO"}`
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
