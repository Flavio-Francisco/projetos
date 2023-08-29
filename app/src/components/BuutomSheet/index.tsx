import React, {useCallback, useEffect, useRef, useState} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetProps} from '@gorhom/bottom-sheet/src/components/bottomSheet/types';
import {BlurView} from '@react-native-community/blur';
import {Keyboard, View} from 'react-native';
import {Button, Icon} from './styles';

interface IProps extends BottomSheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  snapPoints: string[];
}

export const BottomSheetComponent = ({
  children,
  isOpen,
  toggle,
  snapPoints,
  ...rest
}: IProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const keyboardMonitor = useCallback(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardHide);
  }, []);

  function onKeyboardShow() {
    setIsOpenKeyboard(true);
  }

  function onKeyboardHide() {
    setIsOpenKeyboard(false);
  }

  useEffect(() => {
    keyboardMonitor();
  }, [keyboardMonitor]);

  // renders
  return (
    isOpen && (
      <BottomSheet
        ref={bottomSheetRef}
        handleComponent={() => null}
        animateOnMount
        backdropComponent={({style}) => (
          <View
            style={[
              style,
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <BlurView
              blurAmount={1}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              reducedTransparencyFallbackColor="white"
            />
          </View>
        )}
        index={0}
        snapPoints={isOpenKeyboard ? ['85%'] : snapPoints}
        {...rest}>
        <Button onPress={toggle}>
          <Icon name="x" />
        </Button>
        {children}
      </BottomSheet>
    )
  );
};