let nameArray=[];
let ageArray=[];
function testfunction(){
    
    //let ageRegex=/^[0-9]*$/;
    //location.href="second.html"
    let nameInput;
    let ageInput;
    const ni = document.getElementById("name-input");
    const ai = document.getElementById("age-input");
    nameInput=ni.value;
    ageInput=ai.value;
    //let ageTest=ageRegex.test("ageInput");

    if (nameInput=="" || ageInput==""){
        alert("Invalid Input. Please try again.");
        document.getElementById('age-input').value='';
        document.getElementById("name-input").value='';
        return;
    }
    if (ageInput>120){
        alert("You can't be that old!!!");
        document.getElementById('age-input').value='';
        document.getElementById("name-input").value='';
        return;
    }
    nameArray.push(nameInput);
    ageArray.push(ageInput);
    console.log(nameArray);
    console.log(ageArray);

    //The below code is to display table on the first page as per 1st requirement.
   
    //  let table=document.getElementById("table0")
    //  let nextRow=table.insertRow(-1);
    //  let col1= nextRow.insertCell(0);
    //  let col2= nextRow.insertCell(1);
    //  col1.innerHTML=nameInput;
    //  col2.innerHTML=ageInput; 
    // checkVowel(nameInput,ageInput);  
    localStorage.setItem("nameArray",JSON.stringify(nameArray));   
    localStorage.setItem("ageArray",JSON.stringify(ageArray));

    document.getElementById('age-input').value='';
    document.getElementById("name-input").value='';

    checkVowel(nameInput,ageInput);       
}

function checkVowel(nameInput,ageInput){
    let i=0;
    let flag=0;
    let flaga=0;
   
    for(i=0;i<nameInput.length;i++){

        let ch=nameInput[i]
        if (ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"||ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U"){
            flag=1;
            break;
        }
    }
    if (ageInput>18){
        flaga=1
    }
    
    showpopup(flag,flaga);
    
}

function showpopup(flag,flaga){
    let message="";

    if (flag==0 && flaga==0){
        message="No vowel and minor!";
        }
    else if(flag==0 && flaga==1){
        message="No vowel and adult!!";
    }
    else if(flag==1 && flaga==0){
        message="Has vowel and minor!";
    }
    else{
        message="Has vowel and major!!";
    }

    console.log(nameArray);
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    
    modal.style.display = "block";
    document.getElementById("popup").innerHTML=message;
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


window.onload=function createTable(){
    console.log("Hi")
    let storedNames = JSON.parse(localStorage.getItem("nameArray"));
    let storedAges = JSON.parse(localStorage.getItem("ageArray"));
    console.log(storedNames);
    let i=0;
    let table=document.getElementById("table1");
    for(i=0;i<storedNames.length;i++){
        console.log("Hello")
        let nextRow=table.insertRow(-1);
        let col1= nextRow.insertCell(0);
        let col2= nextRow.insertCell(1);
        col1.innerHTML=storedNames[i];
        col2.innerHTML=storedAges[i];
    }
       
}

function clearData(){
    this.localStorage.clear();
}

