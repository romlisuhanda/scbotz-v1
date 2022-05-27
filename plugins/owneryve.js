let handler = function (m) {
	this.sendContact(m.chat, '6281224804625', 'Owner Bot zxyuu :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
