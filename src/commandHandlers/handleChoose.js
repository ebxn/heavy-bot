const generateRandomNumber = require('../util/randomNumUpTo')

module.exports = (msg, args) => {
  const randomIndex = generateRandomNumber(args.length)

  msg.reply(`I have chosen... ${args[randomIndex]}`)
}
