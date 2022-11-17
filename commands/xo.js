const { TicTacToe } = require('discord-gamecord'); class AsyncConstructor {
  constructor(args, message) {
    return (async () => {
      this.allowedChannels = ["737729263221997619", "851217659395571712"]
      if(!["851217659395571712", "737729263221997619"].includes(message.channel.id)) return this;
      this.content = "Mention someone."
      if(!message.mentions.users.first()) return this;
      this.noMessage = true
      this.content = null
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
      return this;
    })(args);
  }
}

module.exports = AsyncConstructor
