
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import { RestProvider } from '../providers/rest/rest';
@IonicPage()
@Component({
  selector: 'page-create-book',
  templateUrl: 'create-book.html',
})
export class CreateBookPage {
  datesList=[];
  guestHouse={}
  bookeRoomss=[]
  query = {
    searchDate :new Date(),
    type:"",
    guestHouseName:""
  }
  element={
    GUESTHOUSENAME:"",
    ROOMS:''
  }
  @ViewChild(DatePickerDirective) public datepicker: DatePickerDirective;

  public initDate: Date = new Date();
  public initDate2: Date = new Date(2015, 1, 1);

  constructor(public navCtrl: NavController,public rest:RestProvider) { }

   bookeRooms(){
    var url="http://localhost:3000/itdept/api/getBookedRooms";
    this.rest.getBookedRooms(url,this.query)
         .subscribe(data => {
           console.log(data.data)

          

           for (var i=0;i<data.data.length;i++)
           {

                if  (data.data[i][0].GUESTHOUSENAME == this.query.guestHouseName)
            {

              this.guestHouse=data.data[i][0];
              this.datesList=data.data[i][0].ROOMS[0].DATES;
              // this.datesList.forEach((x)=>{
              //   var ddmm=new Date(x.DATE);
              //   x.bookingDates=ddmm.getDay()+"/"+(ddmm.getMonth()+1);  
              //   console.log(x.bookingDates);          
              // })
         
            }

           }
           console.log(this.datesList)
         
   
          // if(data.Status == 200)
          // { 
          //   data.data.forEach(element => {
          //    // console.log(element.GUESTHOUSENAME)

          //   if  (element.GUESTHOUSENAME == this.query.guestHouseName)
          //   {

          //     this.guestHouse=element;
          //     console.log(element);
          //     console.log(this.guestHouse);
          //     console.log(this.query)
          //   }
              
          //   });

          // }

         
   
          })
       }
}

