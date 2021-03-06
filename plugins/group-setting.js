let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Berikan keterangan open/close.*`, m)
	} else if(args[0] == 'open') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
	} else if(args[0] == 'close') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Berikan keterangan open/close.*`, m)
	} 
}
handler.help = ['group *open/close*']
handler.tags = ['group admin']
handler.command = /^(group)$/i
handler.admin = true
handler.botAdmin = false
handler.group = true
handler.fail = null
handler.exp = 0
module.exports = handler