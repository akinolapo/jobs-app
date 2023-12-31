import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES} from '../../../constants';

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Peace</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() =>{}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity>
          <Image
        </TouchableOpacity>

      </View>
      <View style={styles.tabsContainer}>
        <FlatList/>
      </View>
    </View>
  )
}

export default Welcome