
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { Icon } from "../components";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "@rneui/themed";
import { useState } from "react";

export const HouseScreen = ({ listing }) => {
  const insets = useSafeAreaInsets();
  const LISTING = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3sad8ba',
      name: 'First Item',
      address: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      images: 'https://picsum.photos/200'
    },
    {
      id: 'bd7acbea-c1b1-dasaed5-3ad53abb28ba',
      name: 'First Item',
      address: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      images: 'https://picsum.photos/200'
    },
    {
      id: 'bd7acbea-c1b1dasc2-aed5-3ad53abb28ba',
      name: 'First Item',
      address: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      images: 'https://picsum.photos/200'
    },
    {
      id: 'bd7acbea-dsac2-aed5-3ad53abb28ba',
      name: 'First Item',
      address: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      images: 'https://picsum.photos/200'
    },
    {
      id: 'bdeacbea-dsac2-aed5-3ad53abb28ba',
      name: 'First Item',
      address: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      images: 'https://picsum.photos/200'
    },
    {
      id: 'bd7acbea-dsacqaed5-3ad53abb28ba',
      name: 'First Item',
      address: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      images: 'https://picsum.photos/200'
    },
  ];

  const Item = ({ item, onPress, solid }) => (
    <>
      <TouchableOpacity style={{ marginHorizontal: 16, marginTop: 16, backgroundColor: "#ffe", paddingBottom: 8, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }} onPress={onPress}>
        <Image
          resizeMode='cover'
          resizeMethod='resize'
          source={{ uri: item.images }}
          style={{ height: 200, width: 326, borderRadius: 15, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
        >
          <Icon name={`heart${solid}`} size={24} color="#fff" style={{ position: "absolute", right: 20, top: 20 }} />

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
    </>
  );

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#fefefe';
    const color = item.id === selectedId ? 'red' : 'black';
    const title = item.id === selectedId ? 'white' : 'black';
    const iconStyle = item.id === selectedId ? '' : '-outline';

    return (
      <Item
        item={item}
        onPress={() => { setSelectedId(item.id); alert("you clicked this post") }}
        backgroundColor={backgroundColor}
        textColor={color}
        title={title}
        solid={iconStyle}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={LISTING}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
