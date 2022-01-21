import nc from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db';
import { Mongoose } from 'mongoose';
import data from '../../utils/Data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'Seeded successfully' });
});

export default handler;
