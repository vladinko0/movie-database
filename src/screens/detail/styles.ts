import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    minHeight: 800,
  },
  image: {
    width: '100%',
    height: 350,
    overflow: 'hidden',
  },
  titleView: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textsView: {
    width: '90%',
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 20,
    width: '90%',
  },
  genreText: {
    marginTop: 10,
    fontSize: 15,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginBottom: 5,
  },
});
