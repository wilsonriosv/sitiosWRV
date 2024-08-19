// HeaderRightButton.js
import React from 'react';
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderRightButton = () => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Opciones" iconName="settings" onPress={() => alert('Menú de opciones')} />
  </HeaderButtons>
);

export default HeaderRightButton;
