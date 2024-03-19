document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var email = document.getElementById('email').value;
        var birthdate = document.getElementById('birthdate').value;
        var genderFemale = document.getElementById('female').checked;
        var genderMale = document.getElementById('male').checked;
        var city = document.getElementById('city').value;

        if (!name || !surname || !email || !birthdate || (!genderFemale && !genderMale) || !city) {
            alert('Please fill in all fields');
            event.preventDefault();
        } else {
            window.location.href ="./project.html"; 
        }
    });
});