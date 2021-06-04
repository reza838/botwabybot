let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].nolink
	if(cek) return conn.reply(m.chat, `*Anti Link telah aktif pada grup ini.*\n*Share Link GC = Kick !!!*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nolink = true
		conn.reply(m.chat, `*Anti Link berhasil diaktifkan.*\n*Share Link GC = Kick !!!*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].nolink

	if(!cek) return conn.reply(m.chat, `*Anti Link telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nolink = false
		conn.reply(m.chat, `*Anti Link berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
handler.help = ['antilink _on/off_']
handler.tags = ['group admin']
handler.command = /^(antilink)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.limit = true
module.exports = handler