//═══════════════════════════════════════════════════════//
//
//                              𖡝ŞƤ͢σƤ𖡝Ƀ͢σͲ𖡝
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['31620000112','491731000070']
global.premium = ['Your Number']
global.ownernomer = '+31 6 20000112'
global.ownername = 'Hunoter-Mheg'
global.botname = '𖡝ŞƤ͢σƤ𖡝Ƀ͢σͲ𖡝'
global.footer = '©SPoPBotTeam.'
global.ig = 'https://github.com/ll-Hunoter-ll'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/nexusNw/Gojo-Satoru'
global.myweb = 'https://instagram.com/mheg'
global.packname = '𖡝ŞƤ͢σƤ𖡝Ƀ͢σͲ𖡝'
global.author = 'Hunoter'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'Diese Funktion ist nur für Administratoren!',
    botAdmin: 'Bot muss zuerst Admin sein!',
    owner: 'Diese Funktion ist nur für Besitzer!',
    group: 'Funktion wird nur für Gruppen verwendet!',
    private: 'Funktionen, die nur für den privaten Chat verwendet werden!',
    bot: 'Diese Funktion ist nur für Bot',
    wait: 'Warten Sie eine Minute...',
    error: 'Fehler! Vielleicht ist der Api-Schlüssel abgelaufen🤔!',
    endLimit: 'Ihr Tageslimit ist abgelaufen, das Limit wird alle 12 Stunden zurückgesetzt',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
