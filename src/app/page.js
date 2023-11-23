import { Header } from '@/components/Header/Header';
import { Input } from '@/components/Input/Input';
import { Layout } from '@/components/Layout/Layout';
import { Card } from '@/components/Cards/Card'
import Image from 'next/image'

async function getNotes() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/YQzghSYuXLlt", {
    cache:"no-store"
  });
  const data = await res.json()

  return data;
}

export default async function Home() {

  const { data } = await getNotes();

  return (
      <Layout>
        <Header/>
        <Input data/>
        {data.map(({_id, name, isdone, date}, index) => {
          return (
            <Card key={_id} content={name} status={isdone} date={date} index={index}/>
          )
        })}
      </Layout>
  )
}
