let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, '*❏  L I N K  G R O U P*\n\nhttps://chat.whatsapp.com/' + (await conn.groupInviteCode(m.chat)), m)
}
handler.help = ['linkgroup','link']
handler.tags = ['group tools']
handler.command = /^linkgroup|link?$/i
handler.group = true
handler.botAdmin = true
handler.limit = true
handler.fail = null
module.exports = handler

