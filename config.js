const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFVMnBPRVVHdDlLSmRPZ0s4bXY0WXVLL2lFMVRFeXNxYUhQU09INEUwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVdVSHNjL0xqSldlbGNoRXBOWkE4d0h6VmNmaWExcHNsRFhOQkxXUkttST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTWtDVGxkcnpmbzUrYnBoZG4yUlU1VE9PcmVBYkkzZFZla3Vsa2FLRG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcUNkblJybXhHMlJaOXdrU1VCeWJXSnQzNC9WODhkc2lvcXBVVmRaQldnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIamdVbWZKYUJoVWtaR1FUT2k1VnI1QW5kWEE0TmhCdzkzdkFPMEM5R3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV4Yk9JTVpMTE54VFFlTjBnaWxPc3Npa1VkRjh6NU1QY0RmOHI1elRRUzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xNc1EyVU1aQ2RHbmRkcEVmRUhQUWFWSXN5RmYxenRjSkdoTituUS8zaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2VPdzR5WHRhL0ZMQ1dZNnJVUVorQVhuUWxiMFBTV0R3dUhLRERodFRoVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp4M0srcDBhdXdZSU0vL2hDMHYzL0tlaXZsbGYrZCtnZnJFRlRpdFRkcXZJYmZwUU9PVCtZTG13WndMN2pGZ0NTNi9hSEx3UzRLWm50NDRJWS9TdWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJsTnd3ZVg2aExHR3NwekhnQ3REaWcxNnVLSGh0MHRmcElZb3NGV2k3V2hrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDE4ODgyNTE1ODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjdBRjdFMERFMURFODhDOUZBNTVGMzQ5NTk5MDgwMjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTc1NTA3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTg4ODI1MTU4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNThBQUQ1QTRBQjU3NTkwMjAwOTVFQUEzMTVBQzJBOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NzU1MDc4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJXSEJXQlJQUCIsIm1lIjp7ImlkIjoiODgwMTg4ODI1MTU4NDoxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwOTIwNjk5NjA5MTM3OjEwQGxpZCIsIm5hbWUiOiJUYW52aXIyMDcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05PTHhJb0dFTUhrbXNVR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJlbldlUzBXMmI2Y21sWlZnWVJzeXY1dlk2SGJPWlBqV2JET0pVTEYzVXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1lbTdyWXY5QWlHQlNUbDVOTlU3V1BnZVJ6MUJSM3JxdCtWcmZVWWJmZ2NVYlJrTVVabnV0Q0tKYU9oUUNsdHZVVldKT3RWTlpiSmlDZWg4M29iNkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzM2N6Z3hCM082Y2VJSk42RzYvYUkyMGYwNlhUWXNXTVAzUFltWjNLdnlUUHdncHhyUzRzUDdFelJJMmkrMmpKL2Y3MU03RFd4b0sxVUVjT2JYQ3Zqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijg4MDE4ODgyNTE1ODQ6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTNwMW5rdEZ0bStuSnBXVllHRWJNcitiMk9oMnptVDQxbXd6aVZDeGQxTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NzU1MDc2LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1WLyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS SHABAN-MD*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "8801888251584",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
