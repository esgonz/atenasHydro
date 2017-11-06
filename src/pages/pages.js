import { TabsResultPage } from './tabs-results/tabs-results';
import { ResultBasic } from './result-basic/result-basic';
import { ResultWaterAnalysis } from './result-water-analysis/result-water-analysis';
import { ResultSolution } from './result-solution/result-solution';
import { ResultScheme } from './result-scheme/result-scheme';
// The page the user lands on after opening the app and without a session
export var FirstRunPage = TabsResultPage;
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export var MainResultPage = TabsResultPage;
// The initial root pages for our tabs (remove if not using tabs)
export var TabResultBasic = ResultBasic;
export var TabResultWater = ResultWaterAnalysis;
export var TabResultSolution = ResultSolution;
export var tabResultScheme = ResultScheme;
//# sourceMappingURL=pages.js.map