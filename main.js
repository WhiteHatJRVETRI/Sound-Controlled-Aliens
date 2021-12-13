function startclass(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/smMVf6bs6/model.json',modelready)
}
function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error,results){
    if (error) {
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("result_label").innerHTML="i can hear-"+results[0].label
        document.getElementById("accuracy").innerHTML="accuracy-"+results[0].confidence*100
        img1=document.getElementById("alien_1")
        img2=document.getElementById("alien_2")
        img3=document.getElementById("alien_3")
        img4=document.getElementById("alien_4")
        if (results[0].label=="claping") {
          img1.src="aliens-01.gif" 
          img2.src="aliens-02.png"
          img3.src="aliens-03.png"
          img4.src="aliens-04.png" 
        } else if (results[0].label=="scratch") {
            img1.src="aliens-01.png" 
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        
            
        }
        else if (results[0].label=="taping") {
            img1.src="aliens-01.png" 
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }
        else if (results[0].label=="Background Noise") {
            img1.src="aliens-01.png" 
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }
    }
}
