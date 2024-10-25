import passport from 'passport';
import { Strategy } from 'passport-discord';
import { user } from '../db/schema.js';

export const discordStrategy = new Strategy({
  clientID: process.env.DISCORD_CLIENT_ID!,
  clientSecret: process.env.DISCORD_CLIENT_SECRET!,
  callbackURL: process.env.DISCORD_CALLBACK_URL!,
  passReqToCallback: true,
}, async (req, accessToken, refreshToken, profile, done) => {});