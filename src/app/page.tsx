

import dynamic from 'next/dynamic';
const Client = dynamic(() => import('@/components/client/Client'), {
  ssr: false,
});




export default function Home() {





  return (
    <>

      <Client />

    </>


  );
}

