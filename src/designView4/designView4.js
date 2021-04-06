import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import styles from '../designView4/style';

const designView4 = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.view3}>
          <View style={styles.greenText}></View>
          <View style={styles.orangeText}></View>
          <View style={styles.blueText}></View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default designView4;
