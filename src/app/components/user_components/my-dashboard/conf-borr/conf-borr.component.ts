import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BooksService } from '../../../../services/books.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { UserService } from '../../../../services/user.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-conf-borr',
  templateUrl: './conf-borr.component.html',
  styleUrls: ['./conf-borr.component.css']
})
export class ConfBorrComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<any>,
              private _bookService: BooksService,
              private _userService: UserService,
              private ngFlashMessageService: NgFlashMessageService,
              @Inject(DOCUMENT) private document: Document,
              @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  confirmBorrow(){
    //code here to borrow the book
    //patch availability to false
    var updateBook = {
      available: true
    }
    var borrowBook = {
      bookId: this.data.borBook._id
    }

    console.log("YES I AM CALLED");
   

    //current logged in user
    var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
    //update book available as false
    
    localStorage.setItem('updateBook',  JSON.stringify(updateBook));
    localStorage.setItem('borbook',  this.data.borBook._id);
    localStorage.setItem('borrowBook',  JSON.stringify(borrowBook));
    localStorage.setItem('title', this.data.borBook.title);
    // this._bookService.paytmpay();
    return this.document.location.href = 'http://localhost:3000/paytm';
    // this._bookService.buybook();

    // this._bookService.borrowBook(this.data.borBook._id, updateBook).subscribe(data => {
    //   if (data.success) {
    //     //book available updated to false
    //     console.log(this.data.borBook.title, 'availability is now false');        
    //     //Then update the user.borrow
    //     this._userService.addToBorrows(borrowBook, loggedUserId).subscribe(subData=>{
    //       if (subData.success) {
    //         console.log('Added to the borrowed list of user');            
    //         this.dialogRef.close();
    //         this.ngFlashMessageService.showFlashMessage({
    //           messages: ["You borrowed " + this.data.borBook.title],
    //           dismissible: true,
    //           timeout: 4000,
    //           type: 'info'
    //         })
    //       }else {
    //         this.ngFlashMessageService.showFlashMessage({
    //           messages: ["Something went wrong"],
    //           dismissible: true,
    //           timeout: 4000,
    //           type: 'danger'
    //         });
    //       }
    //     })       
    //   } else {
    //     this.ngFlashMessageService.showFlashMessage({
    //       messages: ["Something went wrong"],
    //       dismissible: true,
    //       timeout: 4000,
    //       type: 'danger'
    //     });
    //   }
    // })  
  }

}



