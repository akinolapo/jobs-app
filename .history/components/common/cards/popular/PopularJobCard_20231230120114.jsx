import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = () => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardpress(item)}
      >
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image source={{uri: item.emp}} style={styles.image} />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard