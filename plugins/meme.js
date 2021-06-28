let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  const subreddits = ['dankmemes', 'wholesomeanimemes', 'wholesomememes', 'AdviceAnimals', 'MemeEconomy', 'memes', 'terriblefacebookmemes', 'teenagers', 'historymemes', 'okbuddyretard', 'nukedmemes']
  const randSub = subreddits[Math.random() * subreddits.length | 0]
  console.log('looking for memes on ' + randSub)
  fetch('https://meme-api.herokuapp.com/gimme/' + randSub)
    .then(res => res.json())
      .then(body => {
        conn.sendFile(m.chat, body.url, '', '', m)
      })
        .catch(() => {
          m.reply(global.wait)
        })
}
handler.help = ['meme']
handler.tags = ['fun','images']
handler.command = /^(meme)$/i
handler.limit = true

module.exports = handler