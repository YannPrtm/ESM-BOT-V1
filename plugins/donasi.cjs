var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [082350496532]
│ • DANA [082350496532]
│ • OVO [082252285143]
│ • GOPAY [082252285143]
│ • SHOPPE PAY [-]
│ • Saweria [https://saweria.co/botstyle]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282252285143
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
