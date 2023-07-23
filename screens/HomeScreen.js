import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { StyleSheet, Text, ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import useSearch from "../hooks/useSearch";

import { ListingContext } from "../context/ListingContext";
import { Divider, FAB, Image, Input } from '@rneui/themed';

import { auth } from '../config';
import { Icon } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from 'react-native';

import { Featured } from "./Featured";
import { HouseScreen } from './HouseScreen';
import { RoomScreen } from './RoomScreen';
import { ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const CurrentListing = ({ navigation }) => {
  const { listing, setListing } = useContext(ListingContext);

  return (
    <>
      <ScrollView style={styles.container}>
        <Text>
          ALL YOUR MESSAGES GOES HERE
          {JSON.stringify(listing, null, 2)}
        </Text>
      </ScrollView>

      <FAB
        style={{ margin: 20 }}
        placement="right"
        size="small"
        overlayColor="#454545"
        icon={{ name: "add", color: "#fff" }}
        onPress={() => navigation.navigate("Add")}
      />
    </>
  )
}

const WishlistScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{}}>
        AKAN DATANG
      </Text>
    </ScrollView>
  )
}
const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: "https://picsum.photos/200" }} style={{ paddingVertical: 20 }} blurRadius={5} >
        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginVertical: 10 }} onPress={() => alert("You trying to view the image?")}>
          <Image source={{ uri: "https://img.freepik.com/free-icon/user_318-159711.jpg" }} style={{ width: 100, height: 100 }}
            resizeMode="contain" />
        </TouchableOpacity>
        <Text style={{
          textAlign: 'center',
          fontSize: 16,
          marginVertical: 10, color: "white"
        }}>
          USER PROFILE PIC
        </Text>
      </ImageBackground>
      <Divider width={5} style={{ marginBottom: 8 }} />
      <View style={{ flexGrow: 1, flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
        <View>
          <View style={{
            marginHorizontal: 16,
            marginVertical: 8,
            paddingHorizontal: 12,
            paddingVertical: 12,
            backgroundColor: "#fff",
            borderRadius: 15
          }}>
            <Text style={{ color: "#1b1b1b", marginBottom: 4, marginLeft: 8 }}>Your Name</Text>
            <Input inputContainerStyle={{
              borderTopWidth: 0,
              borderBottomWidth: 0,
            }} style={{ fontSize: 14 }} disabled={true} placeholder='CURRENT USER LOGGED IN NAME' value={auth.currentUser.displayName} />
          </View>
          <View style={{
            marginHorizontal: 16,
            marginBottom: 8,
            paddingHorizontal: 12,
            paddingVertical: 12,
            backgroundColor: "#fff",
            borderRadius: 15
          }}>
            <Text style={{ color: "#1b1b1b", marginBottom: 4, marginLeft: 8 }}>Your Name</Text>
            <Input inputContainerStyle={{
              borderTopWidth: 0,
              borderBottomWidth: 0,
            }} style={{ fontSize: 14 }} disabled={true} placeholder='CURRENT USER LOGGED IN EMAIL' value={auth.currentUser.email} />
          </View>
        </View>

        <View style={{ paddingVertical: 8 }}>
          <Button title='Signout' onPress={handleLogout}></Button>
        </View>
      </View>

    </View>
  )
}
const SearchListing = ({ listing }) => {

  const { keyword, setKeyword, filteredList } = useSearch(listing);

  return (
    <>
      <View style={{ flexGrow: 1, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
        <Image source={require("../assets/flame.png")} style={{ width: 40, height: 40 }} />
        <Input
          inputContainerStyle={{
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
          style={{
            height: 40, paddingHorizontal: 20, marginHorizontal: 10, marginTop: 20, borderRadius: 15,
            borderWidth: 2,
            borderColor: "#d9d9d9",
            backgroundColor: "#e6e6e6"
          }}
          value={keyword} onChangeText={(text) => setKeyword(text)} placeholder="Search place....." underlineColorAndroid="transparent" autoCapitalize="none" />
      </View>
    </>
  )
}

// JANGAN KACAU NI BACKUP PAGE
const Featured1 = ({ listing }) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <ScrollView style={styles.container}>
        <TouchableOpacity style={{ marginHorizontal: 16, marginVertical: 16, backgroundColor: "#ffe", paddingBottom: 8, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }} onPress={() => alert("You clicked this property")}>
          <Image
            resizeMode='cover'
            resizeMethod='resize'
            source={{ uri: "https://picsum.photos/200" }}
            style={{ height: 200, width: 326, borderRadius: 15, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <Icon name="heart-outline" size={24} color="#fff" style={{ position: "absolute", right: 20, top: 20 }} />

            {/* <View style={{ position: "absolute", right: 0, bottom: 0, backgroundColor: "#f22", paddingHorizontal: 20, paddingVertical: 8, borderTopLeftRadius: 5 }}>
              <Text style={{ color: "#fff", }}>RM140 / month</Text>
            </View> */}

          </Image>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: "flex-start", justifyContent: 'space-between', marginVertical: 8, marginHorizontal: 16, paddingTop: 8 }}>
            <View style={{ flexDirection: 'column', alignContent: 'center' }}>
              <Text style={{ alignItems: "center", gap: 4, marginBottom: 8 }}>PROPERTY NAME HERE........</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Icon name="map-marker" size={16} color="#000" style={{ marginRight: 4 }} />
                <Text>property location</Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row", gap: 8, justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                  <Icon name="bathtub" size={16} color="#000" style={{ marginRight: 4 }} />
                  <Text>2</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                  <Icon name="bed-king" size={16} color="#000" style={{ marginRight: 4 }} />
                  <Text>2</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                  <Icon name="parking" size={16} color="#000" style={{ marginRight: 4 }} />
                  <Text>Yes</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                  <Icon name="sofa-single" size={16} color="#000" style={{ marginRight: 4 }} />
                  <Text>Fully</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "column", alignItems: "flex-end", justifyContent: 'space-between' }}>
              <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
                <Text>4.88</Text>
                <Icon name="star" size={16} />
              </View>
              {/* <Text style={{}}>RM500/month</Text> */}
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </>
  )
}


const Room = () => {
  return (
    <>
      <StatusBar />
      <ScrollView style={styles.container}>
        <Text>THIS IS HOUSE SCREEN THAT SHOWING HOUSE TYPE LISTING FROM OUR DATABASE</Text>
      </ScrollView>
    </>
  )
}

const ListingScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name='Current' component={CurrentListing} options={{ title: "My Listing" }} />
      <Stack.Screen name='Add' component={WishlistScreen} options={{ title: "Add Listing" }} />
    </Stack.Navigator>)
}
const MainScreen = () => {
  return (<>
    <Top.Navigator>
      <Top.Screen name="Featured" component={Featured} />
      <Top.Screen name="House" component={HouseScreen} />
      <Top.Screen name="Room" component={RoomScreen} />
    </Top.Navigator>
  </>
  )
}

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: true, }}>
      <Tab.Screen name="Explore" component={MainScreen} options={{
        header: () => (<SearchListing />),
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? "home-search" : "home-search-outline"} size={size} color={focused ? "#433362" : color} />
        )
      }} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? "heart" : "heart-outline"} size={size} color={focused ? "#433362" : color} />
        )
      }} />
      <Tab.Screen name="My Listing" component={ListingScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? "home-city" : "home-city-outline"} size={size} color={focused ? "#433362" : color} />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        headerShown: true,
        headerTitleAlign: "center",
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? "account" : "account-outline"} size={size} color={focused ? "#433362" : color} />
        )
      }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
