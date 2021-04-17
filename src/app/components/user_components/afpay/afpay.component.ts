import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { UserService } from '../../../services/user.service';
import { NgModule }             from '@angular/core';
import { Router } from '@angular/router';
import { MyDashboardComponent } from '../my-dashboard/my-dashboard.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-afpay',
  templateUrl: './afpay.component.html',
  styleUrls: ['./afpay.component.css']
})
export class AfpayComponent implements OnInit {

  constructor(
    private _bookService: BooksService,
    private _userService: UserService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router
    ) { }

  ngOnInit() {
      // constructor(private router: Router)

    var updateBook = {
      available: true
    }
    //borrowBook
    var borrowBook = JSON.parse(localStorage.getItem("borrowBook"))
    //
    // var borbook = JSON.parse(localStorage.getItem("borbook"))
    //current logged in user
    var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
    //title
    this._bookService.borrowBook(localStorage.getItem("borbook"), updateBook).subscribe(data => {
      if (data.success) {
        //book available updated to false
        console.log(localStorage.getItem("title"), 'availability is now false');        
        //Then update the user.borrow
        this._userService.addToBorrows(borrowBook, loggedUserId).subscribe(subData=>{
          if (subData.success) {
            console.log('Added to the borrowed list of user');            
            this.ngFlashMessageService.showFlashMessage({
              messages: ["You borrowed " + localStorage.getItem("title")],
              dismissible: true,
              timeout: 4000,
              type: 'info'
            })
          }else {
            this.ngFlashMessageService.showFlashMessage({
              messages: ["Something went wrong"],
              dismissible: true,
              timeout: 4000,
              type: 'danger'
            });
          }
        })       
      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Something went wrong"],
          dismissible: true,
          timeout: 4000,
          type: 'danger'
        });
      }
    })  
    this.router.navigate(['/']);
  }

  }


