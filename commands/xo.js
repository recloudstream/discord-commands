const { TicTacToe } = require('discord-gamecord');
module.exports = {
  name: "xo",
  cooldown: 60,
  onlyChannels: ["737729263221997619", "851217659395571712"],
  async execute(message) {
    if (!message.mentions.users.first()) return message.channel.send("Mention someone.")
    const Game = new TicTacToe({
      message: message,
      isSlashGame: false,
      opponent: message.mentions.users.first(),
      embed: {
        title: 'Tic Tac Toe',
        color: '#5865F2',
        statusTitle: 'Status',
        overTitle: 'Game Over'
      },
      emojis: {
        xButton: '❌',
        oButton: '🔵',
        blankButton: '➖'
      },
      timeoutTime: 60000,
      xButtonStyle: 'DANGER',
      oButtonStyle: 'PRIMARY',
      turnMessage: '{emoji} | Its turn of player **{player}**.',
      winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
      tieMessage: 'The Game tied! No one won the Game!',
      timeoutMessage: 'The Game went unfinished! No one won the Game!',
      playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });
    Game.startGame();
  },
};