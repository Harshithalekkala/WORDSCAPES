var player_1 = localStorage.getItem("player1");
var player_2 = localStorage.getItem("player2");

var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player_1;
document.getElementById("player2_name").innerHTML=player_2;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question-turn"+player_1;
document.getElementById("player_answer").innerHTML="answer-turn"+player_2;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    c1=word.charAt(1);
    num1=Math.floor(word.length/2);
    c2=word.charAt(num1);
    num2=word.length-1;
    c3=word.charAt(num2);
    remove_c1=word.replace(c1,"_");
    remove_c2=remove_c1.replace(c2,"_");
    remove_c3=remove_c2.replace(c3,"_");
    question_Word="<h4 id='word_display'>Q. "+remove_c1+"</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row = question_word + input_box + check_button ;
       document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = "";
}


