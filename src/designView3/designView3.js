import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import styles from '../designView3/style';

const designView3 = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.view3}>
          <Text style={styles.greenText}>Jahnavi</Text>
          <Text style={styles.orangeText}>Jahnavi</Text>
          <Text style={styles.blueText}>Jahnavi</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.greenText}>Jahnavi</Text>
          <Text style={styles.orangeText}>Jahnavi</Text>
          <Text style={styles.blueText}>Jahnavi</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default designView3;
