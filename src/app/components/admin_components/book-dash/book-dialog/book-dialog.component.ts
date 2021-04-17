import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BooksService } from '../../../../services/books.service';
import {UploadService} from '../../../../services/upload.service'
import { Validators } from '@angular/forms';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Observable } from 'rxjs';




// aws.config.update({
//   secretAccessKey: "pCyaSUPJq4+BMtzbaorBwfpOxxtCo1f1HV8hWOWc",
//   accessKeyId: "AKIAIHU6I6EDKXHPJLWA",
//   region: 'us-east-1' //E.g us-east-1
//  });


@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']  
})
export class BookDialogComponent implements OnInit {

  public _bookForm: FormGroup;

  //ImageFile from input
  imageFile: object;

  //This is the proper imageURL we should receive
  image: string = null;
  bookimageFile: object;
  bookimage: string = null;

  //object downloadURL
  downloadURL: Observable<string>;
  uploadPercent: string = '0.00';

  constructor(private _formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<any>,
              private _bookService: BooksService,
              private uploadservice: UploadService,              
              private ngFlashMessageService: NgFlashMessageService,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void{
    this.dialogRef.close();
  }

  ngOnInit() {
    this._bookForm = this._formBuilder.group({
      _id: [],
      Title: ['', [Validators.required]],
      Author: ['', [Validators.required]],
      Price: ['', [Validators.required]],
      Category: ['Arts-and-Music', [Validators.required]],
      Available: ['', [Validators.required]],          
    })
  }

  ngDoCheck(){       
        
  }

  onSubmit(){

    //Firebase Image upload should be here 
    
    this.uploadImage();
    this.uploadbookImage();
    
    

    //Wait until there is a value for this.image
    while(this.image != null){            
      return true;          
    }
       
  }

  commit(){
    const book = {
      title: this._bookForm.value.Title,
      author: this._bookForm.value.Author,
      category: this._bookForm.value.Category,
      image: this.image,
      price: this._bookForm.value.Price,
      bookimage: this.bookimage,
      available: (this._bookForm.value.Available === 'true')
    }
    console.log('Before Registering the book: ', book);
    //Register a book
    this._bookService.registerBook(book).subscribe(data=>{
      console.log('data received: ',data);
      if (data.success) {
        this.dialogRef.close();
        this.ngFlashMessageService.showFlashMessage({          
          messages: ["Book Registered Successfully"],         
          dismissible: true,           
          timeout: 3000,          
          type: 'info'
        }); 
      }else{
        this.dialogRef.close();
        this.ngFlashMessageService.showFlashMessage({          
          messages: ["Book Failed to Register"],           
          dismissible: true,           
          timeout: 3000,          
          type: 'danger'
        });
      }
    });  
  }

  changeImage(event){
    //Assigns the attached image to class scope variable
    
    this.imageFile = event.target.files[0]; 
    var reader = new FileReader();
            reader.onload = (event: any) => {
                this.image = event.target.result;
            }        
    this.image = "https://esdbookshelf1.s3.amazonaws.com/" + event.target.files[0].name;
    console.log('Image path', event.target.files[0].name)
  }

  
  changebookImage(event){
    //Assigns the attached image to class scope variable
    
    this.bookimageFile = event.target.files[0]; 
    var reader = new FileReader();
            reader.onload = (event: any) => {
                this.bookimage = event.target.result;
            }        
    this.bookimage = "https://esdbookshelf1.s3.amazonaws.com/book/" + event.target.files[0].name;
    console.log('Image path', event.target.files[0].name)
  }

  uploadImage(){
    console.log(this.imageFile);
    this.uploadservice.uploadFile(this.imageFile);
    console.log('This is the address of file',this.image);
  }  

  uploadbookImage(){
    console.log(this.bookimageFile);
    this.uploadservice.uploadbookFile(this.bookimageFile);
    console.log('This is the address of book file',this.bookimage);
  }  

  
  allSetToGo(){
    var flag = false;
    console.log(this.image)
    while (this.image != null) {
      // while an imageURL is returned check if all fields are not empty
      if (this._bookForm.value.Title != '' && this._bookForm.value.Author != '') {
        flag = true;
      }
      break;
    }
    return flag;
  }

  imageAvailable(){
    var flag = false;
    while (this.imageFile != undefined) {
      //checks if image upload button is clicked
      flag = true
      break;
    }
    if (flag){
      if(this.imagebookAvailable()) {
          return true ;
      }
      else{
        return false;
      }
    }
    return flag;
  }
  imagebookAvailable(){
    var flag = false;
    while (this.imageFile != undefined) {
      //checks if image upload button is clicked
      flag = true
      break;
    }
    return flag;
  }


}



