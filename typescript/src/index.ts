import 'dotenv/config';
import client from './config/bot.js';

client.login(process.env.DISCORD);
