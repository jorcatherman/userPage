import mongoose from "mongoose"; 

mongoose.connect("mongodb://localhost/userproj", { // Be aware of this, this might not be the integration were looking for
    useNewUrlParser: true, // To fix this issue, you must add @types/mongoose to the package.json manually, and then npm install.
    useUnifiedTopology: true
})
    .then(() =>{
        console.log("Established a connection")
    })
    .catch(()=>{
        console.log("There has been an error")
    })