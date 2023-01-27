const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const generate = require('./passwordGenerator')

const bot = new Telegraf('5835551319:AAGnMh3GMxc8hSOGG8I1WcE9xDlA3RYw85Y')

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
