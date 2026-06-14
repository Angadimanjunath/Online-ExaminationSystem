// LOGIN

function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if(username === "admin" &&
       password === "admin123")
    {
        alert("Teacher Login Successful");

        window.location.href =
            "teacher-dashboard.html";
    }

    else if(username === "tharun" &&
            password === "tharun123")
    {
        alert("Student Login Successful");

        window.location.href =
            "student-dashboard.html";
    }

    else
    {
        alert("Invalid Username or Password");
    }
}


// LOGOUT

function logout()
{
    alert("Logged Out Successfully");

    window.location.href =
        "login.html";
}


// CREATE EXAM

function createExam()
{
    let examName =
        document.getElementById("examName").value;

    let subject =
        document.getElementById("subject").value;

    let duration =
        document.getElementById("duration").value;

    if(examName === "" ||
       subject === "" ||
       duration === "")
    {
        alert("Please Fill All Fields");
        return;
    }

    alert(
        "Exam Created Successfully\n\n" +
        "Exam : " + examName +
        "\nSubject : " + subject +
        "\nDuration : " + duration + " mins"
    );

    document.getElementById("examName").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("duration").value = "";
}


// SUBMIT EXAM

function submitExam()
{
    alert("Exam Submitted Successfully");

    window.location.href =
        "result.html";
}


// VIEW RESULT

function showResult()
{
    alert("Result Loaded");
}


// DEMO EXAM DATA

const exams = [

    {
        name:"Java Examination",
        subject:"Java",
        duration:"60 Minutes"
    },

    {
        name:"Python Examination",
        subject:"Python",
        duration:"45 Minutes"
    },

    {
        name:"SQL Examination",
        subject:"Database",
        duration:"30 Minutes"
    }

];


// LOAD EXAMS

function loadExams()
{
    let container =
        document.getElementById("examContainer");

    if(container == null)
        return;

    let html = "";

    exams.forEach(exam => {

        html += `

        <div class="card p-3 mb-3">

            <h4>${exam.name}</h4>

            <p>
                Subject :
                ${exam.subject}
            </p>

            <p>
                Duration :
                ${exam.duration}
            </p>

            <a
            href="take-exam.html"
            class="btn btn-primary">
            Start Exam
            </a>

        </div>

        `;

    });

    container.innerHTML = html;
}


// AUTO LOAD

window.onload = function()
{
    loadExams();
};