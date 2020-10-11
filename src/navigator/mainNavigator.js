import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn11138193Navigator from '../features/SignIn11138193/navigator';
import BlankScreen1138178Navigator from '../features/BlankScreen1138178/navigator';
import ArticleList138160Navigator from '../features/ArticleList138160/navigator';
import ArticleList138159Navigator from '../features/ArticleList138159/navigator';
import ArticleList138158Navigator from '../features/ArticleList138158/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn11138193: { screen: SignIn11138193Navigator },
BlankScreen1138178: { screen: BlankScreen1138178Navigator },
ArticleList138160: { screen: ArticleList138160Navigator },
ArticleList138159: { screen: ArticleList138159Navigator },
ArticleList138158: { screen: ArticleList138158Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
