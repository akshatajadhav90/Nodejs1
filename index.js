//craete a new folder named akshata under syncvsasync folder
//create a txt file named Bio in that folder
//append data in txt file
// read data from file
//file encoding
//rename bio to mybio
//delete folder





const fs = require("fs");

//fs.writeFileSync("read.txt","Hi, welcome");

// #### synchronous way  #####
//const data = fs.readFileSync("read.txt", "utf8");

//console.log(data);

//####### asynchronous way ########
/*const data = fs.readFile("read.txt", "utf8",(err, data)=>{
    console.log(data);

});*/

//console.log("After the data");


//#####  create folder under syncvsasync  #####

fs.mkdir("akshata", (err)=>{
    console.log("folder created");
});

//### craeting a file under newly created folder ###

fs.writeFile("./akshata/bio.txt", "Hey , My name is Akshata",(err)=>{
    console.log("Files created");

});

/*fs.appendFile("./akshata/bio.txt",  " how are you?", (err)=>{
    console.log("files data appended");
});*/


// store the data inside the file and then print that data
/*fs.readFile("./akshata/bio.txt","utf8",(err,data)=>{
    console.log(data);
});*/


//######## Rename file name ##########

fs.rename("./akshata/bio.txt","./akshata/Mybio.txt",(err)=>{
    console.log("file renamed");
});

//######   delete file ########

/*fs.unlink("./akshata/Mybio.txt", (err)=>{
    console.log("file deleted succsessfully");
});*/


//#####  remove folder or directory from syncvssync folder #######

/*fs.rmdir("./akshata", (err)=>{
    console.log("Folder deleted");
});*/



