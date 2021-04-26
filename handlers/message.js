const checkVideo = require('../checkVideo');
/**
 * Message Handler
 * @param {Client} client Discord Client
 * @param {Message} message Discord message
 */
module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (client.config.exemptChannels.includes(message.channel.id)) return;
    if (client.config.exemptUsers.includes(message.author.id)) return;
};
