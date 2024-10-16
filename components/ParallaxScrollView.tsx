import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  BounceInUp,
  FadeIn, FadeOut,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import {ThemedText} from "@/components/ThemedText";
import {Icon} from "@rneui/themed";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerBackgroundColor: string;
  textComponent: string;
  nameIcon: string;
  component: any;
  headerTopPosition: number;
}>;

export function ParallaxScrollView({
  children,
  headerBackgroundColor,
    textComponent,
    nameIcon,
    component,
    headerTopPosition
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  let styles;

  if (nameIcon == "") {
    styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white"
      },
      header: {
        height: 150,
        overflow: 'hidden',
        zIndex: 0
      },
      content: {
        flex: 1,
        padding: 32,
        gap: 16,
        overflow: 'hidden',
        backgroundColor: "white"
      },
      titleHeader: {
        zIndex: 1,
        fontFamily: "AfacadFlux",
        fontSize: 25,
        color: "white",
      },
      headerView: {
        display: "flex",
        flexDirection: "row",
        marginTop: headerTopPosition,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20
      },
      iconHeader: {
        top: -7
      }
    });
  } else {
    styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white"
      },
      header: {
        height: 150,
        overflow: 'hidden',
        zIndex: 0
      },
      content: {
        flex: 1,
        padding: 32,
        gap: 16,
        overflow: 'hidden',
        backgroundColor: "white"
      },
      titleHeader: {
        zIndex: 1,
        fontFamily: "AfacadFlux",
        fontSize: 25,
        color: "white",
      },
      headerView: {
        display: "flex",
        flexDirection: "row",
        marginTop: headerTopPosition,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15
      },
      iconHeader: {
        top: -7
      }
    });
  }

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView entering={FadeIn.duration(400)} exiting={FadeOut.duration(400)} ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor },
            headerAnimatedStyle,
          ]}>
        </Animated.View>
        <View style={styles.headerView}>
          {component}
          {nameIcon == "" ? null : (
              <Icon name={nameIcon} style={styles.iconHeader} size={70} color={"white"}></Icon>
          )}
          <ThemedText style={styles.titleHeader}>
            {textComponent}
          </ThemedText>
        </View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}