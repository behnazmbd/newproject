import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @ViewChild('vid') vid :ElementRef;
  foodArray= [
    {
    
      image: "/assets/images/img7.jfif" , name:"Ham sandwich", price:"$50", description:"Lorem ipsum dolor sit amet, conseteur sodipscing elitr."
      
    },
    {
      image: "/assets/images/img8.jfif" , name:"Ham sandwich", price:"$60", description:"Lorem ipsum dolor sit amet, conseteur sodipscing elitr."
    },
    {
      image: "/assets/images/img9.jfif" , name:"Ham sandwich", price:"$70", description:"Lorem ipsum dolor sit amet, conseteur sodipscing elitr."
    },
    {
      image: "/assets/images/img10.jfif" , name:"Ham sandwich", price:"$80", description:"Lorem ipsum dolor sit amet, conseteur sodipscing elitr."
    },
    {
      image: "/assets/images/img11.jpg" , name:"Ham sandwich", price:"$90", description:"Lorem ipsum dolor sit amet, conseteur sodipscing elitr."
    },
    {
      image: "/assets/images/img12.jpg" , name:"Ham sandwich", price:"$100", description:"Lorem ipsum dolor sit amet, conseteur sodipscing elitr."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
play(){
this.vid.nativeElement.play();
}
}
