import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenA from '../../screens/ScreenA'
import ScreenB from '../../screens/ScreenB'
import Splash from '../../screens/Splash'
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default () => {
    const [init, setInit] = useState(true);
    useEffect(() => setInit(false), []);

    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                drawerType: 'front',
                drawerStyle: (init ? null : { width: '100%', }),
                headerShown: false
            }}
        >
            <Drawer.Screen name="Splash" component={Splash} />
            <Drawer.Screen name="ScreenA" component={ScreenA} />
            <Drawer.Screen name="ScreenB" component={ScreenB} />
        </Drawer.Navigator>
    );
}