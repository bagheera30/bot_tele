const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const generate = require('./passwordGenerator')

const bot = new Telegraf(YOUR_BOT_TOKEN)

bot.command('password', (ctx) => {
    ctx.reply('Masukkan panjang password yang diinginkan:')
    bot.on('message', (ctx) => {
        const length = parseInt(ctx.message.text)
        if(isNaN(length)) {
            ctx.reply('Input tidak valid, harap masukkan angka')
        } else {
            const password = generate.generatePassword(length)
            ctx.reply(`Password: ${password}`)
        }
    })
})

bot.launch()
