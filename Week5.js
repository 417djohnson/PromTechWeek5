class Brand {
  constructor (brand, country) {
    this.brand = brand;
    this.country = country;
    } 

  describe() {
    return '${this.brand} originates from ${this.country}.';
  } 
}

class Whiskey {
    constructor(brand) {
        this.brand = brand;
        this.brand = [];
    }

 addBrand(brand) {
    if (brand instanceof Brand) {
        this.brand.push(brand);
    } else {
        throw new Error('You can only add an instance of Brand. This is not a brand: ${brand}');
    }
 }

 describe() {
    return '${this.brand} has ${this.brand.length} brand.';

 }
}
class Menu {
    constructor() {
        this.Whiskey = [];
        this.selectedWhiskey = null;
    }

start(){
    let selection = this.showWhiskeyMenuOptions();
   
    while (selection != 0) {
      switch (selection) {
        case '1':
            this.createWhiskey();
            break;
        case '2':
            this.viewWhiskey();
            break;
        case '3':
            this.deleteWhiskey();
            break;
        case '4':
            this.displayWhiskey();
            break;
        default:
            selection = 0;      
    }
    selection = this.showWhiskeyMenuOptions();
  }
  
  alert('See ya later!');
}

showWhiskeyMenuOptions() {
    return prompt(' 0)exit, 1) create new whiskey, 2) view whiskey, 3) delete whiskey, 4) display all whiskey');    
} 

showWhiskeyMenuOptions(whiskeyInfo) {
    return prompt('0) back 1) create brand 2) delete brand ${whiskeyInfo}');
    
}

displayWhiskey(){
    let whiskeyString = ' ';
    for (let i = 0; i < this.whiskey.length; i++) {
        whiskeyString += i + ') ' + this.whiskey[i].name + '\n';
    }
    alert(whiskeyString);
}

createWhiskey() {
    let name = prompt('Enter name for new whiskey:');
    this.whiskey.push(new Whiskey(name));
    }

viewWhiskey()  {
    let index = prompt('Enter the index of the whiskey you wish to view:');
    if (index > -1 && index < this.whiskey.length) {
        this.selectedWhiskey = this.whiskey[index];
        let description = 'Whiskey name: ' + this.selectedWhiskey.name + '\n';
        
        for (let i = 0; i < this.selectedWhiskey.Brand.length; i++) {
            description += i + ') ' + this.selectedWhiskey.Brand[i].name + ' - ' 
            + this.selectedWhiskey.brand[i].country + '\n';
        }
        let selection = this.showWhiskeyMenuOptions(description);
        switch (selection) {
            case '1':
                this.createBrand();
                break;
            case '2':
                this.deleteBrand();  
        }
    }   
 }

}  

let menu = new Menu();
menu.start();
