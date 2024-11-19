const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© olamide" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348122618787,2348109787394";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_22_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImg2aThBTWRVd3h4dGVPWDRMaXZ4UjYxVGJYa0IvTkExd2dBSnl6RlVMSGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtYdldkOEdnUmk2OXRWb01ELTBVd3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODA3Y2Y4ZTQtZTcxOC00YjU2LThlNTItODI1MGUzZDBjOTVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMTAzLFxuICAgICAgMTAwLFxuICAgICAgNjMsXG4gICAgICA4OSxcbiAgICAgIDUzLFxuICAgICAgMTQ3LFxuICAgICAgMzcsXG4gICAgICA1OCxcbiAgICAgIDk5LFxuICAgICAgOTEsXG4gICAgICAxNDMsXG4gICAgICAxNzEsXG4gICAgICA1NSxcbiAgICAgIDE4NSxcbiAgICAgIDI3LFxuICAgICAgMTMzLFxuICAgICAgMTc0LFxuICAgICAgMjMwLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTY1LFxuICAgICAgMTU4LFxuICAgICAgMzQsXG4gICAgICAyMjYsXG4gICAgICAxNzcsXG4gICAgICA0MyxcbiAgICAgIDE0MixcbiAgICAgIDI0NixcbiAgICAgIDIzMixcbiAgICAgIDQ5LFxuICAgICAgMTU5LFxuICAgICAgMTk4LFxuICAgICAgMTc0LFxuICAgICAgNzIsXG4gICAgICAyMjMsXG4gICAgICAxMTAsXG4gICAgICAxMTUsXG4gICAgICAxMzIsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZOEhQS1BFN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwOTc4NzM5NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODg5Nzk1NjgyNzI4MToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDWG9xRUxFUExwOGJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFd3VEIvT0J6SjhpL3d5NUd4emNOakl4NVBsZ3NyVFhYYytUOFY1bkZUOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpelJPeURKMzc5cXlZUjU2S0M2OHpDSjJ6SDZxR3VCVml4VFhEU040MUh0TkVkV2drdDFWMWxlQi91bG8wS3JqWXVGTzhUQ0hWK3N2R0RiTkd6eFpoUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmSWxOR3B3RWxtYlR0SUs5MFlaOFBTdUJLQmgvVEF2OFJQdmNqci94YUVrZ0Vwd1NIM2F6MjU5Qm5WSkNjeHUwb0NNRlh2d2V4SmxEL2NkbW9HaDFEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA5Nzg3Mzk0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjAxNTM1MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
