function checkAnswer() {
    var selectedOption = document.querySelector('input[name="q1"]:checked');
    if (selectedOption) {
        var answer = selectedOption.value;
        if (answer === "c") {
            document.getElementById("result").innerHTML = "Good guess!";
        } else {
            document.getElementById("result").innerHTML = "Better luck next time :)";
        }
    } else {
        document.getElementById("result").innerHTML = "Please select an option.";
    }
}