import { FunctionComponent } from 'react'
import { PeerTabs } from '../../components/peer-tabs'
import { Header } from '../../components/header'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs content={['Peer 1', 'Peer 2', 'Peer 3']} />
    </>
  )
}

export default HomePage
