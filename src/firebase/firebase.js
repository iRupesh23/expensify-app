import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };

// // child_removed
//     database.ref('expenses')
//         .on('child_removed',(snapshot)=>{
//             console.log(snapshot.key,snapshot.val());
//     });

// //child_changed
//     database.ref('expenses')
//         .on('child_changed',(snapshot)=>{
//             console.log(snapshot.key,snapshot.val());
//         });
       
// //child_added
//     database.ref('expenses')
//         .on('child_added',(snapshot)=>{
//         console.log(snapshot.key,snapshot.val());
//     });


//   database.ref('expenses')
//     .on('value',(snapshot)=>{

//         const expenses = [];
        
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                     id : childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
        
//          console.log(expenses);

//     });

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id : childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

//   database.ref('expenses').push({
//       description : "Bought a ring for my dwoo",
//       note: 'Diamong Ring',
//       amount : 132423423,
//       createdAt : 23211323
//   });

// database.ref('notes/-LN45aBjsvpGqHILQM10').remove();

//   database.ref('notes').push({
//     title : 'Course Topics List',
//     body : 'React, Native, Angular'
//   });

  

//  database.ref().on('value',(snapshot)=>{
//      const dataObject = snapshot.val();
//     console.log(`${dataObject.name} is a ${dataObject.job.title} at ${dataObject.location.city}`);
//  },(e)=>{
//     console.log("Error while fetching data",e);
//  });   

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('This has failed',e);
//     });
    

//   database.ref().set({
//     name : "Rupesh Maharjan",
//     age : 29,
//     stressLevel : 8,
//     job: {
//         title : "Programmer",
//         company : "Google"
//     },
//     location : {
//         city : 'Melbourne',
//         country : 'Australia'
//     }
//   }).then(()=>{
//       console.log("Data is saved");
//   }).catch((e)=>{
//       console.log('This has failed',e);
//   });


//   database.ref().update({
//       stressLevel : 9,
//       'job/company' : "Amazon",
//       'location/city' : "Seattle"
//   });


// database.ref().remove()
//   .then(()=>{
//         console.log('Data removed successfully');
//   }).catch(()=>{
//         console.log('Error removing the database');
//   });

