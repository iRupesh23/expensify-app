 // Higher Order Components (HOC) - A compopnet (HOC) that renders another component
 // Reuse code
 // Render hijacking
 // Prop manipulation
 // Abstract state

 import React from 'react';
 import ReactDOM from 'react-dom';

 const Info = (props) => (
     <div>
        <h1>Info</h1>
        <p>Thie info is : {props.info} </p>
     </div>
 );

 const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info. Please dont share</p>}
        <WrappedComponent {...props}/>
        </div>
    );
 };

 const requireAuthentication = (WrappedComponent) =>{
     return (props) =>(
         <div>
           {props.isAuthenticated ? (<WrappedComponent {...props}/>)  : (<p>Please login to view the page.</p>)}
         </div>
     );

 };

 const AdminInfo = withAdminWarning(Info);

 const AuthInfo = requireAuthentication(Info);



 //ReactDOM.render(<AdminInfo isAdmin={true} info='This is the details'/>,document.getElementById('app'));
 ReactDOM.render(<AuthInfo isAuthenticated={false} info='This is the details'/>,document.getElementById('app'));