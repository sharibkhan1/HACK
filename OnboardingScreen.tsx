import React from 'react';
import { StyleSheet, View ,FlatList,ViewToken} from 'react-native';
import { AnimationObject } from 'lottie-react-native';
import Animated,{useAnimatedRef,useSharedValue,useAnimatedScrollHandler}from 'react-native-reanimated';
import RenderItem from './components/RenderItem.tsx';
import Pagination from './components/Pagination.tsx';
import CustomButton from './components/CustomButton.tsx';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './AppPages/Home.tsx';

interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('./assets/Animation - 1704652756931.json'),
    text: 'One step solution for Patient and  Doctors',
    textColor: '#232323',
    backgroundColor: '#247158',//'#ffa3ce',
  },
  {
    id: 2,
    animation: require('./assets/Animation - 1704652756931.json'),
    text: 'Patients can choose their medications and can bid amount ',
    textColor: '#232323',
    backgroundColor: '#6AB29B',//#E4D5C7, 95877A, 6AB29B , 247158,fffff0
  },
  {
    id: 3,
    animation: require('./assets/Animation - 1704652756931.json'),
    text: 'Nearby Physicians and therapiest will be suggested',
    textColor: '#232323',
    backgroundColor: '#EDEID2',
  },
];

const OnboardingScreen = () => {
    const flatListRef =useAnimatedRef<FlatList<OnboardingData>>();
    const x =useSharedValue(0);
    const flatListIndex = useSharedValue(0);

    const onViewableItemsChanged=({viewableItems}:{viewableItems:ViewToken[]})=>{
        if(viewableItems[0].index !== null){
            flatListIndex.value = viewableItems[0].index;
        }
    }
    const onScroll = useAnimatedScrollHandler({
        onScroll: event=>{
        x.value=event.contentOffset.x;
        },
    });
  return (

    <View style={styles.container}>
        <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
            data={data}
            renderItem={({item,index})=>{
                return <RenderItem item={item} index={index} x={x}/>;
            }}
            keyExtractor={item => item.id.toString()}
            scrollEventThrottle={16}
            horizontal
            bounces={false}
            pagingEnabled={true}
           showsHorizontalScrollIndicator={false}
           onViewableItemsChanged={onViewableItemsChanged}
           viewabilityConfig={{
            minimumViewTime:300,
            viewAreaCoveragePercentThreshold:10,
            }}

        />
        <View style={styles.bottomContainer}>
            <Pagination data={data} x={x}/>
            <CustomButton
                flatListRef={flatListRef}
                flatListIndex={flatListIndex}
                dataLength={data.length}
                x={x}
            />
        </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bottomContainer:{
        position:'absolute',
        bottom:20,
        left:0,
        right:0,
        marginHorizontal:30,
        paddingVertical:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
});