import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { FertigationprogrameGrowerinfo } from '../pages/fertigationprograme-growerinfo/fertigationprograme-growerinfo';
import { ResultOfWaterAnalysis } from '../pages/result-of-water-analysis/result-of-water-analysis';
import { ResultOfFertigationSolution } from '../pages/result-of-fertigation-solution/result-of-fertigation-solution';
import { ResultOfFertigationScheme } from '../pages/result-of-fertigation-scheme/result-of-fertigation-scheme';
import { AddWaterAnalysis } from '../pages/add-water-analysis/add-water-analysis';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = FertigationprogrameGrowerinfo;
export const Tab2Root = ResultOfWaterAnalysis;
export const Tab3Root = ResultOfFertigationSolution;
export const Tab4Root = ResultOfFertigationScheme;
export const Tab5Root = AddWaterAnalysis;