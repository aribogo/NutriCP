import React, { ReactElement, useState, useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Icon } from "@rneui/base";
import { scale } from "../../utils/screenResizing";

const TransparentButton = (props) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  /*
    const toggleDropdown = () => {
        visible ? setVisible(false) : openDropdown();
    };
**/

  /*
    const openDropdown = () => {
        DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py - h);
        });
    }
*/

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[stylesButton.button]}>
      <Text style={stylesButton.buttonText}>{item.label}</Text>
      <Icon type="font-awesome" name="chevron-down" style={stylesButton.icon} />
      {renderDropdown(item)}
    </TouchableOpacity>
  );
  const renderDropdown = (item) => {
    console.log(item.label);

    if (item.id == selectedId) {
      return <Text style={stylesButton.contentText}>{item.value}</Text>;
    }
  };

  /*
        const renderItem = (item) => {
            return (
                <TouchableOpacity
                    ref={DropdownButton}
                    style={stylesButton.button}
                    onPress={() => {setVisible(!visible), toggleDropdown, item.visible = true }}
                >
                    <Text style={stylesButton.buttonText}>{item.label}</Text>
                    <Icon type='font-awesome' name='chevron-down' style={stylesButton.icon} />
                    {renderDropdown(item)}
                </TouchableOpacity>
            );
        }
*/

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          if (item.id === selectedId) {
            setSelectedId(0);
          } else {
            setSelectedId(item.id);
          }
        }}
      />
    );
  };

  /*
const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
*/
  /*
        return (

            <FlatList
                data={props.data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
            />

        );

        */

  return (
    <SafeAreaView>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

//style={[styles.dropdown, { top: dropdownTop }]}
//data={data}
// keyExtractor={(item, index) => index.toString()}

// type="outline"

const stylesButton = StyleSheet.create({
  button: {
    borderColor: "#7EB4B0",
    borderWidth: scale(1),
    height: scale(50),
    borderRadius: scale(10),
    width: scale(350),
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    fontSize: scale(15),
    fontWeight: "light",
    color: "#7EB4B0",
    textAlign: "center",
  },
  contentText: {
    position: "absolute",
    fontSize: scale(17),
    fontWeight: "light",
    color: "#0B3F60",
    textAlign: "justify",
  },
  icon: {
    color: "#7EB4B0",
    width: scale(20),
    alignSelf: "flex-start",
    // left: scale(10)
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default TransparentButton;
