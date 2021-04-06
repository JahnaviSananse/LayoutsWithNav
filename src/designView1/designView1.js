import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import styles from '../designView1/style';

const designView1 = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.view1}>
          <Text style={styles.redText}>Jahnavi</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default designView1;
