import passport from 'passport';
import { Strategy } from 'passport-local';
import { user } from '../db/schema.js';

export const localStrategy = new Strategy({
  usernameField: 'username',
  passwordField: 'password',
}, async (username, password, done) => {});