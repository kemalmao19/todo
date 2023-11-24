import { Header } from '@/components/Header/Header';
import { Input } from '@/components/Input/Input';
import { Layout } from '@/components/Layout/Layout';
import { Card } from '@/components/Cards/Card'
import Image from 'next/image'

async function getNotes() {
  const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='kemal@mock.com')", {
    cache:"no-store"
  });
  const data = await res.json()

  return data;
}

export default async function Home() {

  const { items } = await getNotes();

  return (
      <Layout>
        <Header/>
        <Input data/>
        <div className='mt-10 bg-lightBlue rounded-t-lg'>
        {items.map(({id, content, additionalData}, index) => {
          return (
            <Card key={id} content={content} status={additionalData} id={id} index={index}/>
          )
        })}
        </div>
      </Layout>
  )
}
