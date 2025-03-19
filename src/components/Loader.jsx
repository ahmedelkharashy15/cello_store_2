import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div className='loader'>
      <div>
      <BeatLoader size={40} margin={5} color='#555a6e' loading={true} />
      </div>
    </div>
  )
}
