const { Snake } = require('discord-gamecord');
module.exports = {
  name: "monkey",
  cooldown: 60,
  nonEligibleUsersChannel: "737729263221997619",
  onlyChannels: ["737729263221997619", "851217659395571712"],
  async execute(message) {
    const Game = new Snake({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Monkey Game',
        overTitle: 'Game Over',
        color: '#5865F2'
      },
      emojis: {
        board: '⬜',
        food: '🍌',
        up: '⬆️',
        down: '⬇️',
        left: '⬅️',
        right: '➡️',
      },
      snake: { head: '🦍', body: '⬛', tail: '⚫', over: '💀' },
      foods: ['🍌'],
      stopButton: 'Stop',
      timeoutTime: 60000,
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    Game.startGame();
  },
};