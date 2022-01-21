import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import db from '../utils/db';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';

import NextLink from 'next/link';
import Product from '../models/Product';

export default function Home(props) {
  const { products } = props;

  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card>
                <NextLink href={`/products/${product.slug}`} passHref>
                  <Link>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        style={{ height: '50vh' }}
                        image={product.image}
                        title={product.name}
                      ></CardMedia>
                      <CardContent>
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </NextLink>
                <CardActions>
                  <Typography>${product.name}</Typography>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
