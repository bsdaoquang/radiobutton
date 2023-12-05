import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Select} from '../models/Select';

interface Props {
  items: Select[];
  selected?: Select;
  onChange: (val: string) => void;
  placeholder?: string;
  layout?: 'vertical' | 'horizontal';
  title?: string;
}

const RadioButtons = (props: Props) => {
  const {items, selected, onChange, placeholder, title, layout} = props;

  const [itemSelected, setItemSelected] = useState<Select | undefined>(
    selected,
  );

  useEffect(() => {
    itemSelected && onChange(itemSelected?.value);
  }, [itemSelected]);

  return (
    <View
      style={{
        borderLeftColor: 'coral',
        width: '100%',
      }}>
      {title && <Text style={[styles.title]}>{title}</Text>}
      <View
        style={{
          flexDirection: layout && layout === 'horizontal' ? 'row' : 'column',
          flexWrap: 'wrap',
        }}>
        {items.map(item => (
          <TouchableOpacity
            onPress={() => setItemSelected(item)}
            key={item.value}
            style={[styles.itemSelect]}>
            <View
              style={[
                styles.radio,
                {
                  borderColor:
                    itemSelected?.value === item.value ? 'coral' : '#e0e0e0',
                },
              ]}>
              {itemSelected && itemSelected.value === item.value && (
                <View
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 100,
                    backgroundColor: 'coral',
                  }}
                />
              )}
            </View>
            <Text style={[styles.itemSelect]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RadioButtons;
const styles = StyleSheet.create({
  itemSelect: {
    flexDirection: 'row',
    paddingVertical: 6,
    marginRight: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  itemText: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    color: '#212121',
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
