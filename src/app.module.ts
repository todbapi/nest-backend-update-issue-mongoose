import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}`,
      { connectionName: 'MainDatabaseConnection' },
    ),
    UserModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
