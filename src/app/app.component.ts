import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})  

export class AppComponent {
  dropdownList: Array<any> = [];
  selectedItems:Array<any> = [];
  dropdownSettings = {};
  data : Array<any> = []
  
  ngOnInit() {
    console.log(this.data)
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems =this.data
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }



  onItemSelect(item: any) {
    this.data.push(item.item_text)
    console.log(this.data)
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  async onItemdeSelect(item : any){
    let ind = this.data.indexOf(item.item_text)
    this.data.splice(ind,1)
    console.log(this.data);
    
    
  }
}
