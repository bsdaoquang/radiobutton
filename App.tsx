import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import RadioButtons from './src/components/RadioButtons';
import {Select} from './src/models/Select';
import {users} from './src/data/users';

const App = () => {
  const [items, setItems] = useState<Select[]>([]);
  const [itemSelected, setItemSelected] = useState('');

  useEffect(() => {
    const data: Select[] = [];

    users.forEach(item =>
      data.push({
        label: item.name,
        value: item.id.toString(),
      }),
    );

    setItems(data);
  }, []);

  const renderUserDetail = (id: string) => {
    const user = users.find(element => `${element.id}` === itemSelected);

    return (
      <>
        <Text>{user?.name}</Text>
        <Text>{user?.email}</Text>
      </>
    );
  };

  return (
    <View style={[styles.container]}>
      {/* <RadioButtons
        title="User"
        items={items}
        placeholder="Choise"
        onChange={val => setItemSelected(val)}
      /> */}

      <RadioButtons
        title="Gender"
        layout="horizontal"
        items={[
          {label: 'Male', value: 'male'},
          {
            label: 'FeMale',
            value: 'female',
          },
        ]}
        onChange={val => console.log(val)}
      />

      {/* {renderUserDetail(itemSelected)} */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 20,
    paddingTop: 52,
  },
});
