import { Header } from '@/components/Header/Header';
import { Input } from '@/components/Input/Input';
import { Filter } from '@/components/Filter/Filter';
import { CardContainer } from '@/components/Cards/CardContainer';
import { Footer } from '@/components/Footer/Footer';
import { API_URL } from '@/config';

export default async function Home() {

  const res = await fetch(`${API_URL}?filter=(user='kemal@mock.com')`, {
    cache: "no-store"
  });
  const { items } = await res.json();

  return (
      <>
        <Header/>
        <Input data/>
        <div className='mt-10 bg-lightBlue rounded-xl'>
          <CardContainer items={items}/>
        </div>
        <Filter />
        <Footer/>
      </>
  )
}