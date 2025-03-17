function download(url,cb){
    console.log("Original img downloading from url - ", url)
    setTimeout(()=>{
        let imgOriginal=url.split('/').pop();
        console.log("Image downloaded as - ", imgOriginal)
        cb(imgOriginal,upload)
    },2000)
}
function compress(imgOriginal, cb){
    console.log("Original img compressing -" , imgOriginal)

    setTimeout(()=>{
        let compressedImg=imgOriginal.split('.')[0]+".webp"
        console.log("Compressed image - ", compressedImg)
        cb(compressedImg)
    },2000)
}
function upload(compressedImg){
    console.log("Original compressed image -", compressedImg)
    setTimeout(()=>{
        let uploadedImgURL="http://newworld.com/images/"+compressedImg;
        console.log("Image uploaded at - ", uploadedImgURL)
    },2000)

}
download("http://helloworld.com/images/panda.jpg", compress)
