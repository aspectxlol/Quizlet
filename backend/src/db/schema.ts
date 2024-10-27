import { pgTable, primaryKey, varchar, integer, boolean, date, timestamp, PgEnumColumn, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Define tables

export const Questions = pgTable('Questions', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  content: varchar('content', { length: 255 }).notNull(),
  quizId: varchar('quizId', { length: 255 }).notNull(),
});

export const User = pgTable('User', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: date('emailVerified').notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
});

export const Account = pgTable('Account', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  providerType: pgEnum('providerType', ['Google', 'Discord', 'Local'])('providerType').notNull(),
  providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
  refreshToken: varchar('refreshToken', { length: 255 }).notNull(),
  accessToken: varchar('accessToken', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }),
  accessTokenExpires: date('accessTokenExpires').notNull(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
});

export const Quiz = pgTable('Quiz', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
  classroomId: varchar('classroomId', { length: 255 }).notNull(),
  createdBy: varchar('createdBy', { length: 255 }).notNull(),
});

export const Classroom = pgTable('Classroom', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  teacherId: varchar('teacherId', { length: 255 }).notNull(),
});

export const StudentOnClassroom = pgTable('studentOnClassroom', {
  studentId: varchar('studentId', { length: 255 }).notNull(),
  classroomId: varchar('classroomId', { length: 255 }).notNull(),
  // ...primaryKey('studentId', 'classroomId'),
});

export const Options = pgTable('Options', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  content: varchar('content', { length: 255 }).notNull(),
  isCorrect: boolean('isCorrect').notNull(),
  QuestionId: varchar('QuestionId', { length: 255 }).notNull(),
});


export const Session = pgTable('Session', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  expires: date('expires').notNull(),
  sessionToken: varchar('sessionToken', { length: 255 }).notNull().unique(),
  accessToken: varchar('accessToken', { length: 255 }).notNull().unique(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
});

export const Teacher = pgTable('Teacher', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  Quizes: varchar('Quizes', { length: 255 }).notNull(),
});

export const LiveSession = pgTable('LiveSession', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  roomCode: integer('roomCode').notNull(),
  participants: varchar('participants', { length: 255 }).notNull(),
  admin: varchar('admin', { length: 255 }).notNull(),
  quizId: varchar('quizId', { length: 255 }).notNull(),
});

export const Student = pgTable('Student', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  attendanceNumber: integer('attendanceNumber').notNull(),
});

export const VerificationRequest = pgTable('VerificationRequest', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  identifier: varchar('identifier', { length: 255 }).notNull().unique(),
  token: varchar('token', { length: 255 }).notNull().unique(),
  expires: date('expires').notNull(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
});

export const LiveStudent = pgTable('LiveStudent', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  studentId: varchar('studentId', { length: 255 }).notNull(),
  score: integer('score').notNull(),
});

// Define relations

export const ClassroomRelations = relations(Classroom, ({ one }) => ({
  teacher: one(Teacher, { fields: [Classroom.teacherId], references: [Teacher.id] }),
}));

export const LiveStudentRelations = relations(LiveStudent, ({ one }) => ({
  student: one(Student, { fields: [LiveStudent.studentId], references: [Student.id] }),
}));

export const OptionsRelations = relations(Options, ({ one }) => ({
  question: one(Questions, { fields: [Options.QuestionId], references: [Questions.id] }),
}));

export const StudentOnClassroomRelations = relations(StudentOnClassroom, ({ one }) => ({
  classroom: one(Classroom, { fields: [StudentOnClassroom.classroomId], references: [Classroom.id] }),
  student: one(Student, { fields: [StudentOnClassroom.studentId], references: [Student.id] }),
}));

export const LiveSessionRelations = relations(LiveSession, ({ one }) => ({
  quiz: one(Quiz, { fields: [LiveSession.quizId], references: [Quiz.id] }),
  participants: one(LiveStudent, { fields: [LiveSession.participants], references: [LiveStudent.id] }),
}));

export const QuizRelations = relations(Quiz, ({ one }) => ({
  classroom: one(Classroom, { fields: [Quiz.classroomId], references: [Classroom.id] }),
  teacher: one(Teacher, { fields: [Quiz.createdBy], references: [Teacher.Quizes] }),
}));

export const QuestionsRelations = relations(Questions, ({ one }) => ({
  quiz: one(Quiz, { fields: [Questions.quizId], references: [Quiz.id] }),
}));

export const AccountRelations = relations(Account, ({ one }) => ({
  user: one(User, { fields: [Account.userId], references: [User.id] }),
}));

export const StudentRelations = relations(Student, ({ one }) => ({
  user: one(User, { fields: [Student.userId], references: [User.id] }),
}));

export const TeacherRelations = relations(Teacher, ({ one }) => ({
  user: one(User, { fields: [Teacher.userId], references: [User.id] }),
}));

export const SessionRelations = relations(Session, ({ one }) => ({
  user: one(User, { fields: [Session.id], references: [User.id] }),
}));
