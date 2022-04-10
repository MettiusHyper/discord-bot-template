import discord, os
from discord.ext import commands

bot = commands.Bot(
    command_prefix="!", case_insensitive=True, intents=discord.Intents(members=True, guilds=True, messages=True)
)
bot.remove_command("help")

bot.run(os.environ.get("DISCORD"))
