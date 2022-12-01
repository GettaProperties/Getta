import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-buypage',
  templateUrl: './buypage.component.html',
  styleUrls: ['./buypage.component.scss']
})
export class BuypageComponent implements OnInit {
  // header : any;
  // btns : any;
  // current : any;

  constructor() { 
    // let tempthis = this
    // this.header = document.getElementById('myDIV')
    // this.btns = this.header.getElementsByClassName('btn')
    // for(let i:any=0 ; i < this.btns.length ; i++){
    //   this.btns[i].addEventListener('click',function(){
    //     tempthis.current = document.getElementsByClassName('active1')
    //     tempthis.current[0].className = tempthis.current[0].className.replace('active1','')
    //     tempthis.current[i].className += 'active1'
    //   })
    // }
  }

  ngOnInit(): void {
  }
}


