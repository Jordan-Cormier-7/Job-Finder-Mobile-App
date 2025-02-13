/*import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {

    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;*/

import { Stack } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        const hideSplashScreen = async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
                setAppReady(true);
            }
        };

        hideSplashScreen();
    }, [fontsLoaded]);

    const onLayoutRootView = useCallback(() => {
        if (appReady) {
            SplashScreen.hideAsync();
        }
    }, [appReady]);

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;

