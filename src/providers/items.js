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
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from './api';
var Items = (function () {
    function Items(http, api) {
        this.http = http;
        this.api = api;
    }
    Items.prototype.query = function (params) {
        return this.api.get('/items', params)
            .map(function (resp) { return resp.json(); });
    };
    Items.prototype.add = function (item) {
    };
    Items.prototype.delete = function (item) {
    };
    return Items;
}());
Items = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Api])
], Items);
export { Items };
//# sourceMappingURL=items.js.map