import { readdirSync } from 'fs';
import { Client, Collection, Intents } from 'discord.js';
import './deploy-commands.js';

const client = new Client({ intents: [] }) as any;

client.commands = new Collection();
const commandFiles = readdirSync('./dist/commands').filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	import(`../commands/${file}`).then((command) => client.commands.set(command.data.name, command));
}

const eventFiles = readdirSync('./dist/events').filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
	import(`../events/${file}`).then((event) => {
		if (event.once) {
			client.once(event.name, (...args: any) => event.execute(...args));
		} else {
			client.on(event.name, (...args: any) => event.execute(...args));
		}
	});
}

export default client;
