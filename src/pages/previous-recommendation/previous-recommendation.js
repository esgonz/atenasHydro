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
import { NavController, ModalController } from 'ionic-angular';
import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Items } from '../../providers/providers';
var PreviousRecommendation = /** @class */ (function () {
    function PreviousRecommendation(navCtrl, items, modalCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.currentItems = this.items.query();
    }
    /**
     * The view loaded, let's query our items for the list
     */
    PreviousRecommendation.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    PreviousRecommendation.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(ItemCreatePage);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    PreviousRecommendation.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    PreviousRecommendation.prototype.openItem = function (item) {
        this.navCtrl.push(ItemDetailPage, {
            item: item
        });
    };
    PreviousRecommendation = __decorate([
        Component({
            selector: 'page-previous-recommendation',
            templateUrl: 'previous-recommendation.html'
        }),
        __metadata("design:paramtypes", [NavController, Items, ModalController])
    ], PreviousRecommendation);
    return PreviousRecommendation;
}());
export { PreviousRecommendation };
//# sourceMappingURL=previous-recommendation.js.map