namespace my.bookshop;
using { cuid } from '@sap/cds/common';

entity Books :cuid {
   //key ID : UUID;
  AuthorName   : String;
  title        : String;
  Stock        : Integer;
  AuthorNumber : String;
  address      : Composition of many Address;
  bookdetails  : Composition of many Bookdetails;
}

entity Address :cuid {
  city     : String;
  address  : String;
  pincode  : String;
  street   : String;
  landmark : String;

}

entity Bookdetails :cuid{
  PageCount   : Integer;
  PublishedOn : Date;
  genre       : String;
  language    : String;
}
