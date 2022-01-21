import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
} from '@mui/material';
import data from '../utils/Data';
import { typography } from '@mui/system';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
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
                        <typography>{product.name}</typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </NextLink>
                <CardActions>
                  <typography>${product.name}</typography>
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
