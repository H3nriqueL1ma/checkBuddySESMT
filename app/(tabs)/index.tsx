import {Image, StyleSheet, Platform, Button} from 'react-native';

import {ParallaxScrollView} from '@/components/ParallaxScrollView';
import {ThemedButton} from "@/components/ThemedButton";
import {useRouter} from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={'#13D284'} textComponent={"CheckBuddy"} nameIcon={"checklist"} component={""} headerTopPosition={-70}>
      <ThemedButton
          id={"sesmtLists"}
          title={"Check Lists"}
          width={400}
          height={80}
          bgColor={"#2E303F"}
          color={"white"}
          radius={10}
          fontSize={28}
          onPress={() => router.push('/lists')}>
        <Image source={require("../../assets/images/sesmt_logo.png")} style={styles.sesmtLogo}></Image>
      </ThemedButton>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  sesmtLogo: {
    width: 68,
    height: 45
  }
});
