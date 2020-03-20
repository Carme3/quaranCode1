var name = prompt("What is your fullname: ").toUpperCase();
if(name != null){
    document.getElementById("name").textContent=name;
}
function eval(){
    let excellent = 0;
    let mathG = document.getElementById("mathGrade").value;
    let mathRemark = document.getElementById("mathRem");

    if(mathG >= 90 && mathG <= 100)
    {
        mathRemark.textContent = "Excellent";
        excellent += 1;
    }
    else if(mathG >= 80 && mathG <= 89)
    {
        mathRemark.textContent = "Good";
    }
    else if(mathG >= 70 && mathG <= 79){
        mathRemark.textContent = "Average";
    }
    else if(mathG >= 60 && mathG <= 69){
        peRemark.textContent = "Poor";
    }
    else if(mathG >= 0 && mathG <= 59){
        mathRemark.textContent = "Fail";
    }





    let sciG = document.getElementById("sciGrade").value;
    let sciRemark = document.getElementById("sciRem");

    if(sciG >= 90 && sciG <= 100)
    {
        sciRemark.textContent = "Excellent";
        excellent += 1;
    }
    else if(sciG >= 80 && sciG <= 89)
    {
        sciRemark.textContent = "Good";
    }
    else if(sciG >= 70 && sciG <= 79){
        sciRemark.textContent = "Average";
    }
    else if(sciG >= 60 && sciG <= 69){
        sciRemark.textContent = "Poor";
    }
    else if(sciG >= 0 && sciG <= 59){
        sciRemark.textContent = "Fail";
    }



    let engG = document.getElementById("engGrade").value;
    let engRemark = document.getElementById("engRem");

    if(engG >= 90 && engG <= 100)
    {
        engRemark.textContent = "Excellent";
        excellent += 1;
    }
    else if(engG >= 80 && engG <= 89)
    {
        engRemark.textContent = "Good";
    }
    else if(engG >= 70 && engG <= 79){
        engRemark.textContent = "Average";
    }
    else if(engG >= 60 && engG <= 69){
        engRemark.textContent = "Poor";
    }
    else if(engG >= 0 && engG <= 59){
        engRemark.textContent = "Fail";
    }



    let filG = document.getElementById("filGrade").value;
    let filRemark = document.getElementById("filRem");

    if(filG >= 90 && filG <= 100)
    {
        filRemark.textContent = "Excellent";
        excellent += 1;
    }
    else if(filG >= 80 && filG <= 89)
    {
        filRemark.textContent = "Good";
    }
    else if(filG >= 70 && filG <= 79){
        filRemark.textContent = "Average";
    }
    else if(filG >= 60 && filG <= 69){
        filRemark.textContent = "Poor";
    }
    else if(filG >= 0 && filG <= 59){
        filRemark.textContent = "Fail";
    }

    let peG = document.getElementById("peGrade").value;
    let peRemark = document.getElementById("peRem");

    if(peG >= 90 && peG <= 100)
    {
        peRemark.textContent = "Excellent";
        excellent += 1;
    }
    else if(peG >= 80 && peG <= 89)
    {
        peRemark.textContent = "Good";
    }
    else if(peG >= 70 && peG <= 79){
        peRemark.textContent = "Average";
    }
    else if(peG >= 60 && peG <= 69){
        peRemark.textContent = "Poor";
    }
    else if(peG >= 0 && peG <= 59){
        peRemark.textContent = "Fail";
    }

    let eval = document.getElementById("studR");
    if(excellent == 5){
        eval.textContent = "Top Honor Student";
    }
    else if(excellent >= 3 && excellent <= 4){
        eval.textContent = "Second Honorable Student";
    }
    else{
        eval.textContent = "Repeater";
    }
    alert("Number of Excellent: " + excellent);
}