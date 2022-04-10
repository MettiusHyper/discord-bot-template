import { readdirSync } from 'fs';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

(async () => {
	const commands = [];
	const commandFiles = readdirSync('./dist/commands').filter((file) => file.endsWith('.js'));

	for (const file of commandFiles) {
		let command = await import(`../commands/${file}`);
		commands.push(command.data.toJSON());
	}
	const rest = new REST({ version: '9' }).setToken(process.env.DISCORD as string);

	rest.put(Routes.applicationGuildCommands(process.env.APPID as string, process.env.TEST_GUILD as string), {
		body: commands,
	}).catch(console.error);
})();
