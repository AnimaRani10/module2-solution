(function () {
'use strict';


angular.module('MyApp' ,[])
.controller('ToBuyController' , ToBuyController)
.controller('AlreadyBoughtController' , AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemBuy = this;
  itemBuy.showList = ShoppingListCheckOffService.getBoughtItems();


   itemBuy.removeItem = function (itemIndex) {
     ShoppingListCheckOffService.removeBoughtItem(itemIndex);
   };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var itemBought = this;

    itemBought.showListBought = ShoppingListCheckOffService.getRemovedItems();
    

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items\
  var itemRemoved =[];

     var items = [
    {name: "cookies",
     quantity: 10},
    {name: "shirt",
     quantity: 5},
    {name: "books",
     quantity: 7},
    {name: "brush",
     quantity: 2},
    {name: "chips",
     quantity: 4}
   ];



  service.removeBoughtItem = function (itemIdex) {
      itemRemoved.push(items[itemIdex]);
    items.splice(itemIdex, 1);

  };

  service.getBoughtItems = function () {
    return items;
  };

  service.getRemovedItems = function () {
    return itemRemoved;
  };
}





})();
