
document.addEventListener('DOMContentLoaded', function() {
    let nameModal = new bootstrap.Modal(document.getElementById('nameModal'));
    nameModal.show();
});

 document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const userInput = document.getElementById('userNameInput').value;
        document.getElementById("player_name").innerHTML = userInput;
        document.getElementsByClassName("modal-backdrop.fade").style.display="none";
        nameModal.hide();
    });

    document.getElementById('nameForm').addEventListener('submit', function(event) {
        document.getElementById("nameModal").style.display="none";
        document.getElementsByClassName("nameModal").style.display="none";
    })