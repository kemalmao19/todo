import { Header } from '@/components/Header/Header';
import { Input } from '@/components/Input/Input';
import { Layout } from '@/components/Layout/Layout';
import { Card } from '@/components/Cards/Card'
import { Indicator } from '@/components/Indicator/Indicator';

export default async function Home() {

  const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='kemal@mock.com')", {
    cache: "no-store"
  });
  const { items } = await res.json();

  return (
      <>
        <Header/>
        <Input data/>
        <div className='mt-10 bg-lightBlue rounded-xl'>
        {items.map((content, index) => {
          return (
            <Card key={content.id} content={content} id={content.id} index={index}/>
          )
        })}
        {items.length > 0 ? (
          <Indicator content={items}/>
        ): <></>}
        </div>
      </>
  )
}
