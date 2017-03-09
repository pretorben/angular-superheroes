let phonebookData = [
  {name: "Iron Man", number: "119-750-3732", publisher: "Marvel", photo_url: "http://vignette2.wikia.nocookie.net/epicrapbattlesofhistory/images/4/45/Tony_Stark_donut.jpg"},
  {name: "Captain America", number: "518-555-0114", publisher: "Marvel", photo_url: "http://www.beautimode.com/upload/media/074d8e5e7bd35723433c4dc49e2723cc.jpg"},
  {name: "The Flash", number: "404-555-0182", publisher: "DC", photo_url: "http://backwallpapers.com/wp-content/uploads/2016/07/iPhone-6-The-Flash-CW-Barry-Allen-iPhone-Wallpaper-900x900.jpg"},
  {name: "Green Arrow", number: "573-555-0156", publisher: "DC", photo_url: "http://images.en.yibada.com/data/thumbs/full/34959/685/0/0/0/arrow-season-4-premieres-on-the-cw-on-oct-7.png"},
  {name: "Hawkeye", number: "505-555-0166", publisher: "Marvel", photo_url: "http://nerdreactor.com/wp-content/uploads/2012/08/jeremy-renner-hawkeye-img-500x500_c.jpg"}
];

angular
  .module("phonebookApp", [])
  .controller("phonebookCtrl", [ phonebookController ]);
  function phonebookController (){
    this.phonebook = phonebookData;
    this.addListing = function(){
      let listing = {name: this.newListingName, number: this.newListingNumber, publisher: this.newListingPublisher, photo_url: this.newListingPhotoURL};
      this.phonebook.push(listing);
    };
  }
