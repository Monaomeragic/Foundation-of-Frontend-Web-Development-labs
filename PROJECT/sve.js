function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";

        localStorage.setItem(id, 'open');
    } else {
        content.style.display = "none";
        localStorage.setItem(id, 'closed');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    document.querySelectorAll('.content').forEach(function(content) {
        const id = content.id;
        const savedState = localStorage.getItem(id);
        if (savedState === 'open') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});


        $(document).ready(function () {
            var app = $.spapp({ defaultView: "./project.html" });

            app.route({
                view: "./project.html",
                load: function () {
                    console.log("Home page");
                }
            });

            app.route({
                view: "./music.html",
                load: function () {
                    console.log("Music page");
                }
            });

            app.route({
                view: "./events.html",
                load: function () {
                    console.log("Tour page");
                }
            });

            app.route({
                view: "./newalbum.html",
                load: function () {
                    console.log("Gallery page");
                }
            });

            app.route({
                view: "./notification.html",
                load: function () {
                    console.log("Sign Up page");
                }
            });

            app.run();
        });

        function toggleContent(id) {
        var content = document.getElementById(id);
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            localStorage.setItem('content_' + id, 'open');
        } else {
            content.style.display = "none";
            localStorage.setItem('content_' + id, 'closed');
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const savedTheme = localStorage.getItem('theme');
        const themeToggleButton = document.getElementById('theme-toggle');

        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggleButton.textContent = 'Light Theme';
        }

        document.querySelectorAll('.content').forEach(function(content) {
            content.style.display = 'none'; 
        });

        Object.keys(localStorage).forEach(function(key) {
            if (key.startsWith('content_') && localStorage.getItem(key) === 'open') {
                const contentId = key.substring('content_'.length);
                const content = document.getElementById(contentId);
                if (content) {
                    content.style.display = 'block';
                }
            }
        });

        themeToggleButton.addEventListener('click', function () {
            document.body.classList.toggle('dark-theme');
            const isDarkTheme = document.body.classList.contains('dark-theme');
            if (isDarkTheme) {
                localStorage.setItem('theme', 'dark');
                themeToggleButton.textContent = 'Light Theme';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggleButton.textContent = 'Dark Theme';
            }
        });
    });

    $(document).ready(function () {
        const users = JSON.parse(localStorage.getItem('users')) || {};

        $('#signUpForm').validate({
            rules: {
                signUpEmail: {
                    required: true,
                    email: true
                },
                signUpPassword: {
                    required: true,
                    minlength: 8
                },
                signUpFullName: {
                    required: true
                },
                signUpPhoneNumber: {
                    required: true,
                    digits: true,
                    minlength: 10,
                    maxlength: 15
                }
            },
            messages: {
                signUpEmail: {
                    required: "Please enter your email address.",
                    email: "Please enter a valid email address."
                },
                signUpPassword: {
                    required: "Please provide a password.",
                    minlength: "Your password must be at least 8 characters long."
                },
                signUpFullName: {
                    required: "Please enter your full name."
                },
                signUpPhoneNumber: {
                    required: "Please enter your phone number.",
                    digits: "Please enter only digits.",
                    minlength: "Your phone number must be at least 10 digits long.",
                    maxlength: "Your phone number must be no more than 15 digits long."
                }
            },
            submitHandler: function (form) {
                const email = $('#signUpEmail').val();
                const password = $('#signUpPassword').val();
                const fullName = $('#signUpFullName').val();
                const phoneNumber = $('#signUpPhoneNumber').val();

                if (!users[email]) {
                    users[email] = { password, fullName, phoneNumber };
                    localStorage.setItem('users', JSON.stringify(users));
                    toastr.success('Sign-Up successful. Please log in.', 'Success');
                    setTimeout(function() {
                        window.location.href = 'login.html';
                    }, 2000);
                } else {
                    toastr.error('User already exists. Please log in.', 'Error');
                }
            }
        });
    });

    $(document).ready(function () {
        const users = JSON.parse(localStorage.getItem('users')) || {};

        $('#loginForm').validate({
            rules: {
                loginEmail: {
                    required: true,
                    email: true
                },
                loginPassword: {
                    required: true,
                    minlength: 8
                }
            },
            submitHandler: function (form) {
                const email = $('#loginEmail').val();
                const password = $('#loginPassword').val();

                if (users[email] && users[email].password === password) {
                    toastr.success('Login successful!', 'Success');
                    setTimeout(function() {
                        window.location.href = 'tickets.html';
                    }, 2000);
                } else {
                    toastr.error('Invalid email or password.', 'Error');
                }
            }
        });
    });
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); 
        var imgSrc = button.data('img'); 
        var modal = $(this);
        modal.find('.modal-body #modalImage').attr('src', imgSrc);
      });

      function showSuccessMessage(message) {
        toastr.success(message);
      }
      
      function showErrorMessage(message) {
        toastr.error(message);
      }
      