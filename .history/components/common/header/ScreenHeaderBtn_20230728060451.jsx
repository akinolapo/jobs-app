import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity>
      <Image 
        source={iconUrl}
        resizeMode="cover"
        style=
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn