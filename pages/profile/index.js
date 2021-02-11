import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import useSWR from 'swr'

export default function Profile() {
  const { data, error } = useSWR('/api/user', fetch);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <Layout>hello {data.name}!</Layout>
}
