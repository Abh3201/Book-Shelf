import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  
image : String = null;
  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIARLXQJHR5IDWYQBTV',
              secretAccessKey: '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',
              region: 'ap-south-1'
          }
      );
      const params = {
          Bucket: 'esdbookshelf1',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
     
      bucket.upload(params, (err, data) => {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data.Location);
          // this.image =  bucket.getSignedUrl('getObject', {Key: params.Key});
          console.log('returning addres', data.Location);
          return data.Location;
      });

    
//for upload progress   
/*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
}

uploadbookFile(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIARLXQJHR5IDWYQBTV',
              secretAccessKey: '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',
              region: 'ap-south-1'
          }
      );
      const params = {
          Bucket: 'esdbookshelf1/book',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
     
      bucket.upload(params, (err, data) => {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data.Location);
          // this.image =  bucket.getSignedUrl('getObject', {Key: params.Key});
          console.log('returning addres', data.Location);
          return data.Location;
      });

    }

}
