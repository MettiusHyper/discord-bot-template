import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export const data = new SlashCommandBuilder().setName('ping').setDescription(`Replies with the bot's current latency`);
export async function execute(interaction: CommandInteraction) {
	await interaction.reply({
		embeds: [
			new MessageEmbed()
				.setColor('#f2c449')
				.setDescription(`🏓 Pong! API latency is: ${Math.round(interaction.client.ws.ping)}ms`),
		],
		ephemeral: true,
	});
}
