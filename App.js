import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useState } from 'react';

const ExpendedViewPartData = ({ label, value , darkMode }) => {
  return (
    <View style={styles.ExpendedViewPartDataPart} >
      <View>
        <Text style={[styles.ExpendedViewPartDataPartLabel, { color: darkMode ? "#ffffff" : "#303030" }]}  >
          {label}
        </Text>
      </View>
      <View>
        <Text style={[styles.ExpendedViewPartDataPartValue, { color: darkMode ? "#ffffff" : "#303030" }]} >
          {value}
        </Text>
      </View>
    </View>
  )
}


export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Bold": Inter_700Bold,
    "Inter-Regular": Inter_400Regular,
  });

  const [showMore, setShowMore] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <ImageBackground source={darkMode ? require('./assets/dark_BG.png'):require('./assets/light-bg.png') } style={{ flex: 1 }} >

      {/* Main View Part Started */}
      <View style={styles.mainViewPart}>
        {/* +++++++++++++++++++++++++++++++++++++++++++++ */}

        {!showMore && (
          // Upper Text Section Started aaaaaaaaa
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, }}>
              <Text style={styles.upperTextPart} >Lorem ipsum dolor  amet consectetur adipisic elit. A quisquam atque officia, maxime eaque earum cum laudantium nulla iusto. </Text>
              <Text style={styles.upperNamePart} >Ada Lovelace </Text>
            </View>
            <Image source={require('./assets/refresh.png')} />
          </View>
          // Upper Text Section Ended aaaaaaaaa
        )}

        {/* Bottom Time Section Started bbbbbbbb */}
        <View style={{ marginBottom: 36 }}>
          {/* ccccccccccccc  */}
          {/* welcome icon & text */}
          <View style={{ flexDirection: 'row', alignItems: 'center', }} >
            {/* dark and light mode icon  */}
            <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
              <Image source={darkMode ? require('./assets/dark_mode.png') : require('./assets/sun.png')} />
            </TouchableOpacity>
            <Text style={styles.welcomeIconText}> {darkMode ? "GOOD EVENING" : "GOOD Morning"} </Text>
          </View>
          {/* time text */}
          <View style={{ marginTop: 8 }}>
            <Text>
              <Text style={styles.bigTimeText} >11:30</Text>
              <Text style={styles.bigBstText} >BST</Text>
            </Text>
          </View>
          {/* location text */}
          <View style={{ marginTop: 16 }}>
            <Text style={styles.locationText} >IN LONDON UK</Text>
          </View>
          {/* Button  */}
          <TouchableOpacity style={styles.showMoreBtn} onPress={() => { setShowMore(!showMore) }}>
            <Text style={styles.showMoreBtnText} > {showMore ? "LESS" : "MORE"} </Text>
            <Image source={
              showMore ?
                require('./assets/up_arrow.png') :
                require('./assets/down_arrow.png')
            } />
          </TouchableOpacity>
          {/* ccccccccccccc  */}
        </View>
        {/* Bottom Time Section Ended bbbbbbbb */}

        {/* +++++++++++++++++++++++++++++++++++++++++++++ */}
      </View>
      {/* Main View Part Ended ++++++ */}


      {/* ---- EXPENDED View ---- */}
      {showMore && (
        <View style={[styles.ExpendedViewPart, { backgroundColor: darkMode ? "#000000" : "#ffffff" }]} >
          {/*  <View style={styles.ExpendedViewPart} >  */}
          <ExpendedViewPartData label={"Current Timezone"} value={"Europe/London"} darkMode={darkMode} />
          <ExpendedViewPartData label={"Day of the year"} value={"295"} darkMode={darkMode} />
          <ExpendedViewPartData label={"Day of the week"} value={"5"} darkMode={darkMode} />
          <ExpendedViewPartData label={"week number"} value={"42"} darkMode={darkMode} />
        </View>
      )}

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainViewPart: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 62,
    paddingHorizontal: 26
  },
  upperTextPart: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    paddingRight: 8,
    color: "#ffffff",
  },
  upperNamePart: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    marginTop: 8,
    color: "#ffffff",
  },
  bottomTextPart: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    marginTop: 8,
    color: "#ffffff",
  },
  welcomeIconText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginLeft: 8,
    letterSpacing: 3,
    textTransform:'uppercase',
    color: "#ffffff",
  },
  bigTimeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 100,
    letterSpacing: 3,
    color: "#ffffff",
  },
  bigBstText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: "#ffffff",
  },
  locationText: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    letterSpacing: 3,
    color: "#ffffff",
  },
  showMoreBtn: {
    flexDirection: "row",
    width: 115, height: 40,
    borderRadius: 30, marginTop: 50, justifyContent: "space-between",
    paddingLeft: 16, paddingRight: 4, alignItems: "center",
    backgroundColor: "#ffffff",
  },
  showMoreBtnText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    letterSpacing: 3,
    color: "#000",
  },
  ExpendedViewPart: {
    opacity: 0.8,
    paddingHorizontal: 26,
    paddingVertical: 48,
    // backgroundColor: "#ffffff",
  },
  ExpendedViewPartDataPart: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", marginBottom: 8
  },
  ExpendedViewPartDataPartLabel: {
    fontFamily: 'Inter-Regular', fontSize: 10,
    letterSpacing: 2, textTransform: "uppercase",
  },
  ExpendedViewPartDataPartValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  }

});
