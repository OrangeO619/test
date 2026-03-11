import React, {Suspense} from 'react';
import Card from './components/Card'
import CardUse from './components/Card_use'
import { Skeleton } from './components/Skeleton'
import { Modal } from './components/Modal'
export default function App() {
  return (
    <>
      <Card></Card>
      <Suspense fallback={<Skeleton />}>
        <CardUse />
      </Suspense>
      <Modal></Modal>
    </>
  )
}