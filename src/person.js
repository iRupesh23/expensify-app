
const canDrive = (age) => {
   return age>=21;
};

const isAdult= (age)=> age>=18?true:false;

export default (age)=>age>=65 ? true : false;


export{isAdult,canDrive};