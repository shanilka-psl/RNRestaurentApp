import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {FoodListComponent} from '../components/FoodListComponent';
import {FeaturedFoodItem} from '../components/FeaturedFoodItem';
import {listData1, listData2} from '../common/SampleData';

const Home = ({navigation}) => {
  const [selectedItem, setSelectedItem] = React.useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <FlatList
            data={listData1}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <FoodListComponent
                title={item.title}
                image={item.image}
                customStyle={item.id === selectedItem && styles.customStyle}
                customTextStyle={
                  item.id === selectedItem && styles.customTextStyle
                }
                onPressBtn={() => setSelectedItem(item.id)}
              />
            )}
          />
        )}
        renderItem={({item}) => (
          <FeaturedFoodItem title={item.title} image={item.image} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    height: CommonStyles.height,
    width: CommonStyles.width,
  },
  btnStyle: {
    backgroundColor: CommonStyles.colors.primary,
    height: 60,
    width: CommonStyles.width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28.5,
  },

  btnText: {
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.white,
    fontSize: 18,
  },

  customStyle: {backgroundColor: CommonStyles.colors.primary},
  customTextStyle: {color: CommonStyles.colors.white},
});

export default Home;
