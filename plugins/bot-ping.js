let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
	conn.updatePresence(m.chat, Presence.composing)
  conn.reply(m.chat, `*${hl}menu* = melihat menu bot\n*${hl}help* = cara menggunakan bot`, m)
}
handler.help = []
handler.tags = []
handler.customPrefix = /^(b|B)/
handler.command = /^(ot)$/i
module.exports = handler