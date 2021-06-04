let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ FORMAT SALAH ]*\n\nContoh :\n	○ ${usedPrefix + command} on\n	○ ${usedPrefix + command} off`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].antiSpam
	  if(cek) return conn.reply(m.chat, `*Anti Spam sudah diaktifkan*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].antiSpam = true
		conn.reply(m.chat, `*Anti Spam berhasil diaktifkan*\n\n*Bot akan menutup grup otomatis jika mendeteksi spam*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].antiSpam
	  if(!cek) return conn.reply(m.chat, `*Anti Spam sudah mati*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].antiSpam = false
		conn.reply(m.chat, `*Anti Spam berhasil dinonaktifkan*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ FORMAT SALAH ]*\n\nContoh :\n	○ ${usedPrefix + command} on\n	○ ${usedPrefix + command} off`, m)
	} 
}
handler.help = ['antispam _on/off_']
handler.tags = ['group admin']
handler.command = /^(antispam)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.limit = true
module.exports = handler