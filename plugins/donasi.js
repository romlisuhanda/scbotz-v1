let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Pulsa*_✅ : 
║│- 081224804625
║│
║│➸ _*OWNER*_
║│- wa.me/681224804625
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot👤', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
