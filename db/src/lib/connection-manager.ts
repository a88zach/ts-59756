import { mongoose } from '@typegoose/typegoose';

export class ConnectionManager {
  static async connect(uri: string): Promise<mongoose.Connection> {
    await mongoose.connect(uri);

    return mongoose.connection;
  }

  static getConnection(): mongoose.Connection {
    return mongoose.connection;
  }

  static async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}
