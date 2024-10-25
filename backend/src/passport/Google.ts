import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import { users } from '../db/schema';
import db from '../db';
import { eq } from 'drizzle-orm';

export const googleStrategy = new Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: process.env.GOOGLE_CALLBACK_URL!,
  passReqToCallback: true,
}, async (req, accessToken, refreshToken, profile, done) => {
  if (!profile.emails?.length) {
    return done(new Error('No email address'));
  }
  if (!profile.photos?.length) {
    return done(new Error('No avatar'));
  }

  const existingUser = await db
    .select().from(users)
    .where(eq(users.email, profile.emails[0].value))
    .execute();

  try {
    db.insert(users).values({
      username: profile.emails[0].value,
      password: profile.emails[0].value,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value,
      googleId: profile.id,
    }).then(() => {
      done(null, profile);
    });
  } catch (error) {
    console.log(error);
    return done(error)
  }

});
