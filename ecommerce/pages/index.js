import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import data from '@/utils/data';
import Productitem from '@/components/Productitem';

export default function Home() {
  return (
    <Layout title="home page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => {
          <Productitem product={product} key={product.slug} />;
        })}
      </div>
    </Layout>
  );
}
