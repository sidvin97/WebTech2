var ctr=0;
var correct_ctr=0;
var curr_top="None";
var correct=-1;
var questions=new Array();
var answers= new Array();


$(function() {
    $('#btnLogIn').click(function() {
        /*
        console.log("Here in btm");
        var reminder = new Object();
        reminder.dat="words"
        $.ajax({
            type: 'POST',        
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(reminder),
            dataType: 'json',
            url: '/question_page',
            success: function(response)
            {

                console.log("success");
            },
            error: function(error) 
            {
              ele=document.getElementById("#btnLogIn")
              window.location.href='/question_page'
            }
        });
        */
    window.location.href='/question_page'
    });
});
function load()
{
    console.log("Inside LOAD")
    console.log(ctr)
    var topic=new Object();
    console.log(curr_top)
    curr_top="All"
    topic.top=curr_top
    topic.ctr=ctr
    console.log("HERE!")
    document.getElementById("r1").checked = true;
    $.ajax({
    type: 'POST',        
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(topic),
    dataType: 'json',
    url: '/get_quest',
    success: function(response)
    {
        console.log("success");
        console.log(response.responseText);
        var res = response.responseText.split(";");
        document.getElementById("que").innerHTML=res[0];
        document.getElementById("op1").innerHTML=res[1];
        document.getElementById("op2").innerHTML=res[2];
        document.getElementById("op3").innerHTML=res[3];
    },
    error: function(error) 
    {
        console.log("error");
        console.log(error.responseText);
        if(error.responseText=="OVER!")
        {
            alert("The questions are over :(")
            end_quiz(2);
        }
        else
        {
            var res = error.responseText.split(";");
            document.getElementById("que").innerHTML=res[0];
            document.getElementById("op1").innerHTML=" "+res[1];
            document.getElementById("op2").innerHTML=" "+res[2];
            document.getElementById("op3").innerHTML=" "+res[3];
            console.log(res)
            console.log(curr_top)
            correct=parseInt(res[4]);
            console.log(correct);
            questions.push(res[0]);
        }
        //answers.append(res[4]);
    }
    });
}

function ques_submit()
{

    console.log(curr_top);
    console.log(correct)
    console.log(questions)
    //console.log(answers)
    var selected=-1;
    ctr+=1;
    if (document.getElementById('r1').checked) 
    {
        selected=1;
    }
    else if (document.getElementById('r2').checked) 
    {
        selected=2;
    }
    else if (document.getElementById('r3').checked) 
    {
        selected=3;
    }
    answers.push(selected);
    console.log(answers);
    if(selected==correct)
    {
        correct_ctr+=1;
        alert("Congrats, you got the correct answer!");
    }
    else
    {
        alert("You are wrong :(");
    }
    console.log("Submitting")
    console.log(ctr);
    console.log(correct_ctr);
    load();
}

function end_quiz(val1)
{
    if(val1==1)
    {
        var selected=-1;
        ctr+=1;
        if (document.getElementById('r1').checked) 
        {
            selected=1;
        }
        else if (document.getElementById('r2').checked) 
        {
            selected=2;
        }
        else if (document.getElementById('r3').checked) 
        {
            selected=3;
        }
        answers.push(selected);
        console.log(answers);
        if(selected==correct)
        {
            correct_ctr+=1;
            alert("Congrats, you got the correct answer!");
        }
        else
        {
            alert("You are wrong :(");
        }
        //console.log("Submitting")
        //console.log(ctr);
        //console.log(correct_ctr);
    }
    console.log(questions)
    console.log(answers)
    alert(correct_ctr)
    console.log(correct_ctr)
    console.log(ctr)
}

