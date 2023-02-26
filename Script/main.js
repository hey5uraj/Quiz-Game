var total=0;

function check(){
    var ans = 0;
    var q1=document.quiz.que1.value;
    var q2=document.quiz.que2.value;
    var q3=document.quiz.que3.value;
    var q4=document.quiz.que4.value;
    var q5=document.quiz.que5.value;
    var result=document.getElementById('result')
    var quiz=document.getElementById('quiz')
    if(q1=="q1-o3")  {
        ans+=10;
    }
    if(q2=="q2-o3")  {
        ans+=10;
    }
    if(q3=="q3-o2")  {
        ans+=10;
    }
    if(q4=="q4-o3")  {
        ans+=10;
    }
    if(q5=="q5-o3")  {
        ans+=10;
    }

    quiz.textContent=`${ans}`;
    total = total+ans;

    if(ans<=30){
        quiz.textContent=`Your result is ${ans}. It is not so good please try to work on yourself.`

    }
    else{
        quiz.textContent=`Your result is ${ans}. It is awesome. keep it up!.`
        document.getElementById("quiz2").classList.remove("s-hide");
    }
    
}

function check2()
{
    var ans2 = 0;
    var q6=document.quiz2.que6.value;
    var q7=document.quiz2.que7.value;
    var q8=document.quiz2.que8.value;
    var q9=document.quiz2.que9.value;
    var q10=document.quiz2.que10.value;
    var result2=document.getElementById('result2')
    var quiz2=document.getElementById('quiz2')
    if(q6=="Paris")  {
        ans2+=10;
    }
    if(q7=="Jupiter")  {
        ans2+=10;
    }
    if(q8=="Mount Everest")  {
        ans2+=10;
    }
    if(q9=="Earth")  {
        ans2+=10;
    }
    if(q10=="Temperature")  {
        ans2+=10;
    }
    quiz2.textContent=`${ans2}`;
    total = total+ans2;

    if(ans2<=30){
        quiz2.textContent="Your result is "+ ans2 +" It is not so good please try to work on yourself."

    }
    else{
        quiz2.textContent=`Your result is ${ans2}. It is awesome. keep it up!.`
        document.getElementById("quiz3").classList.remove("s-hide");
    }
    
}
function check3()
{
    var ans3 = 0;
    var q11=document.quiz3.que11.value;
    var q12=document.quiz3.que12.value;
    var q13=document.quiz3.que13.value;
    var q14=document.quiz3.que14.value;
    var q15=document.quiz3.que15.value;
    var result2=document.getElementById('result3')
    var quiz3=document.getElementById('quiz3')
    if(q11=="q11-o3")  {
        ans3+=10;
    }
    if(q12=="q12-o3")  {
        ans3+=10;
    }
    if(q13=="q13-o1")  {
        ans3+=10;
    }
    if(q14=="q14-o1")  {
        ans3+=10;
    }
    if(q15=="q15-o1")  {
        ans3+=10;
    }
    quiz3.textContent=`${ans3}`;
    total = total+ans3;

    if(ans3<=30){
        quiz3.textContent=`Your result is ${ans3}. It is not so good please try to work on yourself.`

    }
    else{
        quiz3.textContent=`Your result is ${ans3}. It is awesome. keep it up!.`
    }
   console.log(total); 
}
 

function totalmarks()
{
    document.getElementById("total").innerHTML="Your total score is " + total;

}