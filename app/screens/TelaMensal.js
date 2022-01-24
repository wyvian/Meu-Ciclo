import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CalendarList } from "react-native-calendars";
import { SafeAreaView, Alert, ActivityIndicator } from 'react-native';


function TelaMensal() {
  
  const navigaion = useNavigation();
  
  return (
    <SafeAreaView>
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        //onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        onDayPress={(day) => {navigaion.navigate('Dia', day)}}
      />
  </SafeAreaView>
  );
}

export default TelaMensal;