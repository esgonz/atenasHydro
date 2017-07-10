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

import {PrevResultOfFertigationScheme} from '../pages/prev-result-of-fertigation-scheme/prev-result-of-fertigation-scheme';
import {PrevResultOfFertigationSolution} from '../pages/prev-result-of-fertigation-solution/prev-result-of-fertigation-solution';
import {PrevResultOfWaterAnalysis} from '../pages/prev-result-of-water-analysis/prev-result-of-water-analysis';
import { PrevFertigationprogrameGrowerinfo } from '../pages/prev-fertigationprograme-growerinfo/prev-fertigationprograme-growerinfo';
import { SelectCropGrowth } from '../pages/select-crop-growth/select-crop-growth';

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
export const Tab6Root = PrevFertigationprogrameGrowerinfo;
export const Tab7Root = PrevResultOfWaterAnalysis;
export const Tab8Root = PrevResultOfFertigationSolution;
export const Tab9Root = PrevResultOfFertigationScheme;
export const Tab10Root = SelectCropGrowth;