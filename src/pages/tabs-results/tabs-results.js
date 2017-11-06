var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabResultBasic } from '../pages';
import { TabResultWater } from '../pages';
import { TabResultSolution } from '../pages';
var TabsResultPage = /** @class */ (function () {
    function TabsResultPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tabResultBasic = TabResultBasic;
        this.tabResultWater = TabResultWater;
        this.tabResultSolution = TabResultSolution;
        this.tabResult = null;
        this.tab5Root = null;
        this.tabResultBasicTitle = " ";
        this.tabResultWaterTitle = " ";
        this.tabResultSolutionTitle = " ";
        this.tab4Title = " ";
        this.tab5Title = " ";
        this.tabResultBasicTitle = "Grower Info";
        this.tabResultWaterTitle = "Water analysis";
        this.tabResultSolutionTitle = "Fertigation solution";
        /*this.tab4Title = "Fertigation scheme";
        this.tab5Title = "Send recommendation";*/
    }
    TabsResultPage = __decorate([
        Component({
            selector: 'page-tabs-results',
            templateUrl: 'tabs-results.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], TabsResultPage);
    return TabsResultPage;
}());
export { TabsResultPage };
//# sourceMappingURL=tabs-results.js.map