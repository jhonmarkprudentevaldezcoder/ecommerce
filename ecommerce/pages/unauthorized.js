import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import React from 'react';

export default function unauthorized() {
  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="unauthorized page">
      <h1 className="text-xl"></h1>
    </Layout>
  );
}
