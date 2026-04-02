import axios from 'axios';

let bucketName = 'pmctender';
const triggerFunction = async (extension,foldername) => {

  let earr = extension.split('.');
  
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
  
  // let key1 = '';
  // if (foldername[foldername.length - 1] === '/') {
  //   key1 = `${year}/${month}/${foldername}${earr[0]}${Date.now()}.${earr[earr.length - 1]}`;
  // } else if (foldername.length !== 0) {
  //   key1 = `${year}/${month}/${foldername}/${earr[0]}${Date.now()}.${earr[earr.length - 1]}`;
  // } else {
  //   key1 = `${year}/${month}/${earr[0]}${Date.now()}.${earr[earr.length - 1]}`;
  // }
  


  // let key1=${foldername}/${Date.now().toString()}.${extension}
let key1=``
// let key1 = foldername ? `${foldername}/${extension}` : `/${extension}`;
console.log(foldername,foldername[foldername.length-1])
if(foldername[foldername.length-1]=='/'){
  // console.log("here")
  key1=`${foldername}${extension}`
}
else if(foldername.length!=0){
  console.log("there")
  key1 = `${foldername}/${extension}` 
}
else{
  key1=`/${extension}`
}
try {
  const response = await axios.post("https://s3service.vercel.app/gsu", {
    bucket: bucketName,
    key1,
    Expires: 300,
    account: 'BZTECHSERVER',
  });

  let arr = [response.data.signedUrl, key1];
  console.log(arr); // Log the array containing signedUrl and key1

  return arr; // Return the array as the result of triggerFunction
} catch (error) {
  console.error('Error fetching signedUrl:', error);
  throw error; // Propagate the error if needed
}

  }

  const getPredefinedUrl = (key1) => {
    const modi = encodeURIComponent(key1).replace(/\+/g, "%20");
    return `https://${bucketName}.s3.ap-south-1.amazonaws.com/${modi}`;
};
  
  export { triggerFunction, getPredefinedUrl };


  // right
  //https://dcpr1.s3.ap-south-1.amazonaws.com/Appointment+of+developer+for+residential+redevelopment+of+Ambedkar+Nagar+CHS%2C+Worli/0%2B1+2()dfd.png
  //rong
  // https://dcpr1.s3.ap-south-1.amazonaws.com/Appointment+of+developer+for+residential+redevelopment+of+Ambedkar+Nagar+CHS,+Worli/0+1+2()dfd.png