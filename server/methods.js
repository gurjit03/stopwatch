import { Meteor } from 'meteor/meteor';
import Future from 'fibers/future';
import fs from 'fs';

//console.log(Future)
Meteor.methods({
  exportFile : (data) => {
    new SimpleSchema({
      data : {
        type : Array
      },
      'data.$' : {
        type : Number
      }
    }).validate({data})

    // Set up a future
    const fut = new Future();
    // fs.writeFile('',)
    return fut.wait();
  }
})
