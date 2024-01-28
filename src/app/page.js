import { Header } from '@/components/Header/Header';
import { Input } from '@/components/Input/Input';
import { Filter } from '@/components/Filter/Filter';
import { CardContainer } from '@/components/Cards/CardContainer';
import { Footer } from '@/components/Footer/Footer';
import { fetcher } from './lib/feth';

export default async function Home() {

  const res = await fetcher()

  return (
      <>
        <Header/>
        <Input data/>
        <div className='mt-10 bg-lightBlue rounded-xl'>
          <CardContainer items={res}/>
        </div>
        <Filter />
        <Footer/>
      </>
  )
}