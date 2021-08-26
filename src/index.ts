require('dotenv').config()

import commands from './handlers/commands'
import hears from './handlers/hears'
import bot from './core/bot'
import { development, production } from './utils/launch'

commands(bot)
hears(bot)

process.env.NODE_ENV === 'development' ? development(bot) : production(bot)

export {}
