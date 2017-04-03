import {Component, OnInit, Input, OnChanges} from '@angular/core';
declare var $:any;

@Component({
  selector: 'ps-product-listing',
  templateUrl: 'product-listing.component.html',
  styleUrls: ['product-listing.component.css']
})
export class ProductListingComponent implements OnInit, OnChanges {
  @Input() showProjectNumber: number;
  showProject;

  constructor() {

  }

  ngOnInit() {
    var data= {
      "products":
        [
          {
            "id": "1",
            "image": "../../../../assets/img/plp-pictures/couch.jpg",
            "name": "Suede Couch",
            "price": "$342.99"
          },
          {
            "id": "2",
            "image": "../../../../assets/img/plp-pictures/window.jpg",
            "name": "White Hardwood Frames",
            "price": "$234.99"
          },
          {
            "id": "3",
            "image": "../../../../assets/img/plp-pictures/bedImage.jpg",
            "name": "Master Bedroom Set",
            "price": "$583.99"
          },
          {
            "id": "4",
            "image": "../../../../assets/img/plp-pictures/dresser.jpg",
            "name": "Pink Oak Dresser",
            "price": "$897.99"
          },
          {
            "id": "5",
            "image": "../../../../assets/img/plp-pictures/barStools.jpg",
            "name": "Bar stools",
            "price": "$249.99"
          },
          {
            "id": "6",
            "image": "../../../../assets/img/plp-pictures/loveSeat.jpg",
            "name": "Love Seat",
            "price": "$13.32"
          },{
          "id": "7",
          "image": "../../../../assets/img/plp-pictures/trashCan.jpg",
          "name": "Platinum Trash Can",
          "price": "$43.55"
        },{
          "id": "8",
          "image": "../../../../assets/img/plp-pictures/fridge.jpg",
          "name": "Stainless Steel Fridge",
          "price": "$1373.99"
        },{
          "id": "9",
          "image": "../../../../assets/img/plp-pictures/plates.jpg",
          "name": "Multi-Colored Plates",
          "price": "$24.99"
        },{
          "id": "10",
          "image": "../../../../assets/img/plp-pictures/lawnChair.jpg",
          "name": "Wooden Lawn Chair",
          "price": "$160.44"
        },{
          "id": "11",
          "image": "../../../../assets/img/plp-pictures/porchSwing.jpg",
          "name": "Wooden Porch Swing",
          "price": "$89.99"
        },{
          "id": "12",
          "image": "../../../../assets/img/plp-pictures/rockingChair.jpg",
          "name": "Rocking Chair",
          "price": "$99.99"
        }
        ]
    }
    var section = $(".section");
    var products = data.products;
    $.each(products, function(index){
      var prodName= products[index].name;
      var prodPrice= products[index].price;
      var prodImg= products[index].image;
      var imgDiv= "<img src='" + prodImg + "' class='img-responsive image' alt='Responsive image'>";
      var nameDiv= "<div class='productName'>" + prodName + "</div>";
      var priceDiv= "<div>" + prodPrice + "</div>";
      var column= "<div class='col-md-3 text-center'>" + imgDiv + nameDiv + priceDiv + "</div>";
      section.append(column);
    });
  }

  ngOnChanges() {
    if(this.showProjectNumber == 2){
      this.showProject = true;
    }else {
      this.showProject = false;
    }
    console.log("child-project-num: " + this.showProjectNumber);
    console.log("child-project-true: " + this.showProject);
  }

}
