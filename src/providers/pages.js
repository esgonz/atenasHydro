var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var PagesProvider = (function () {
    function PagesProvider() {
        this.pages = [];
    }
    PagesProvider.prototype.add = function (page) {
        var exists = false;
        if (this.pages.length > 0) {
            for (var i = this.pages.length - 1; i >= 0; i--) {
                if (this.pages[i].title == page.title) {
                    exists = true;
                }
            }
            if (!exists) {
                this.pages.push(page);
            }
        }
        else {
            this.pages.push(page);
        }
    };
    PagesProvider.prototype.delete = function (page) {
        this.pages.reduce(page);
    };
    PagesProvider.prototype.getInstance = function () {
        return this.pages;
    };
    PagesProvider.prototype.setActivePage = function (page) {
        this.activePage = page;
    };
    ;
    PagesProvider.prototype.checkActivePage = function (page) {
        return page == this.activePage;
    };
    return PagesProvider;
}());
PagesProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], PagesProvider);
export { PagesProvider };
//# sourceMappingURL=pages.js.map