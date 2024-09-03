import express from 'express';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { ConnectionManager, widgetModel, Foo } from '@bug-59756/db';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const init = async () => {
  const mongod = await MongoMemoryServer.create();
  await ConnectionManager.connect(mongod.getUri());

  await widgetModel.create({ name: 'widget1', algo: new Foo.FooAlgo() });
};

init().then(() => {
  const app = express();

  app.get('/', async (req, res) => {
    const widgets = await widgetModel.find();
    res.send(widgets);
  });

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
});
