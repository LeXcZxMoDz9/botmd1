const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'LeXcZ' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6287743212449'] // ubah aja pake nomor lu
global.versionbot = "V.5.0.0"
global.owner2 = '6287743212449'
global.nobot = '6287743212449'
global.creator = "6287743212449"
global.linkgc = "https://ptero.rainxzet.com/pb1"
global.botname = 'LeXcZ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.grouptesti = "https://rainxzet.com/s1"
global.prefa = ['','!','.',',','🐤','🗿']
global.tTeks2 = '> '
global.sessionName = 'RainMc' //Gausah Juga
global.idchannel = '120363200538002654@newsletter'
global.linkgc = 'https://rainxzet.com/s1'
global.namebot = "LeXcZ"
global.thumbnail = 'https://rainxzet.com/thumb1'
global.foter1 = 'LeXcZ'
global.urlwa = "https://wa.me/6287743212449"
global.botname = "LeXcZ"
global.foter2 = 'LeXcZ CREATED BY LeXcZ'
global.autobio = true // AutoBio
global.autoread = false // ReadChat
global.Ghost = '`'
global.packname = 'LeXcZ'
global.author = 'LeXcZ'
global.skizo = "RAINMC"
// ApiKeys
global.xfarApi = `OYi6LEZ6QY`
global.caliph = `MyBiibotz`
global.KayBii = `BiiXKayy`
global.zenzkey = `zenzkey_41b4fe7a5d` // ZahwaZein
global.btbApi = `w4SYozNA`
global.ApiNx = `kceScM`
global.skizo = `Twelve`
global.skizo2 = `kyuu`
global.beta = 'BRexrqpD' // https://api.betabotz.org
global.kimz = `kayy`
global.ziro = `ojbSxpdBb4`
global.xyro = `4OfcqDtWMj`
global.rose = 'Aliciazyn'
global.arif = `AR-xQWGNiqhwVaJ`
global.arifyn = `AR-eS8sE0ShK48c`
global.ibeng = `j8a2H4Tly6`
global.ibeng3 = `a5wXu8gj58`
global.ibeng2 =`uYmf6Sgjxl`
global.xeonApi = `976b505f`
global.rbot = `punyaku`
global.miftah = `free`
global.qyuApi = `XjEycutl8w`
global.ApiNeko = `7198c803`
global.ramz = `kayydev`
global.pitu = `3aa275992a`
global.yanzApi = `kyuurzy`
global.ifung = `sCbXLTDebA`
global.alya = `muzan23`
global.zoner = `6D0979`
global.koi = `tWQaPXtQH8`
global.rdnApi = `5o7fzt6nir2`
global.ouzen = `zenzkey_a3ac079e820f` //https://api.ouzen.xyz/
global.kicode = `KC-euHoZ2JgkOhs`
global.maelyn = `SvbxiWHTmt`
global.apikey = `XingYuEmperor`
//
global.aithumb = "https://telegra.ph/file/f47d75d0d4827356a526d.jpg"
//tesksc
global.tesksc = "𝖲𝖢 𝖨𝖭𝖨 FREE DI https://youtube.com/@LexczXModz "
global.tesksesudahsc = "𝖩𝖨𝖪𝖠 𝖨𝖭𝖦𝖨𝖭 𝖬𝖤𝖬𝖡𝖤𝖫𝖨 𝖲𝖢𝖭𝖸𝖠 𝖲𝖨𝖫𝖠𝖧𝖪𝖠𝖭 𝖢𝖫𝖨𝖢𝖪 𝖢𝖧𝖠𝖳 𝖮𝖶𝖭𝖤𝖱"
//TESKSENDPAYMENT
global.tesksendpay = "𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗣𝗜𝗟𝗜𝗛 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 𝗬𝗔𝗡𝗚 𝗦𝗨𝗗𝗔𝗛 𝗗𝗜 𝗦𝗘𝗗𝗜𝗔𝗞𝗔𝗡 𝗗𝗜 𝗕𝗔𝗪𝗔𝗛 𝗜𝗡𝗜"
global.tesksesudahsendpay = "_𝖣𝖾𝗆𝗂 𝖪𝖾𝖺𝗆𝖺𝗇𝖺𝗇 𝖡𝖾𝗋𝗌𝖺𝗆𝖺, 𝖡𝗎𝗒𝗒𝖾𝗋 𝖶𝖺𝗃𝗂𝖻 𝖬𝖾𝗇𝗀𝗂𝗋𝗂𝗆 𝖡𝗎𝗄𝗍𝗂 𝖯𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇 𝖠𝗀𝖺𝗋 𝖳𝗂𝖽𝖺𝗄 𝖳𝖾𝗋𝗃𝖺𝖽𝗂 𝖧𝖺𝗅 𝖸𝖺𝗇𝗀 𝖳𝗂𝖽𝖺𝗄 𝖣𝗂 𝖨𝗇𝗀𝗂𝗇𝗄𝖺𝗇!_"
global.sendpayteskqris = "*𝖴𝗇𝗍𝗎𝗄 𝖯𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇 𝖬𝖾𝗅𝖺𝗅𝗎𝗂 𝖰𝖱𝖨𝖲 𝖠𝗅𝗅 𝖯𝖺𝗒𝗆𝖾𝗇𝗍, 𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖲𝖼𝖺𝗇 𝖥𝗈𝗍𝗈 𝖰𝖱𝖨𝖲 𝖣𝗂𝖺𝗍𝖺𝗌 𝖨𝗇𝗂*"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//GETSCTHUMB
global.tumbone = "https://rainxzet.com/thumb1"

global.domain = "https://ptero.rainxzet.com"
global.apikey = "ptla_ckPPXovWS1X0kXkmGvrBsJbJBy1Y1jPtU1g88zQhEVm"
global.capikey = "ptlc_iBAJsd4ajAttHZArhcTVtYMVYmL1KgaEstWWOY7rT4r"
global.egg = "5"
global.loc = "1"

//VPS (OPSIONAL)
global.sixteengbvpssix = "80K"
global.eightgbvpsfour = "50k"
global.fourgbvpsfour = "35K"
global.twogbvpstwo = "25K"
global.twogbvpsone = "20K"
global.onegbvpsone = "15K"
//JIKA VPS TIDAK REDY KASIH AJA - JANGAN HAPUS "

//NOTE VPS
global.notevps = "*NOTE*\n\n* : JIKA SUDAH MEMBELI BERARTI SUDAH PAHAM RESIKONYA KARENA VPS SEWAKTU WAKTU DAPAT LOCKED\n\n©LeXcZ"

//Send Pay
global.dana = "085282397502"
global.ovo = "085282397502"
global.gopay = "085282397502832"
global.pulsa = "087743212449" //JILA KALIAN MAU ISI SILAHKAN
global.qris = "https://rainxzet.com/qris"

//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

//mess
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('ᴘʀosᴇs...'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!', 
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})