import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import React from 'react'

const LatestArrivalPlaceHolder = props => (
    <div className='grid sm:grid-cols-3 xl:grid-cols-6 gap-12 mb-24'>
      <RectShape color='#cdcdcd' style={{width: '100%', height: 220}}/>
      <RectShape color='#cdcdcd' style={{width: '100%', height: 220}}/>
      <RectShape color='#cdcdcd' style={{width: '100%', height: 220}}/>
      <RectShape color='#cdcdcd' style={{width: '100%', height: 220}}/>
      <RectShape color='#cdcdcd' style={{width: '100%', height: 220}}/>
      <RectShape color='#cdcdcd' style={{width: '100%', height: 220}}/>
    </div>
);

export default LatestArrivalPlaceHolder