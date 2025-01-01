var grade;
function calculateSubjectGrade(marks) {
    if (marks >= 90) {
        return 'O: Outstanding';
    } else if (marks >= 80) {
        return 'A+: Excellent';
    } else if (marks >= 70) {
        return 'A: Very Good';
    } else if (marks >= 60) {
        return 'B+: Good';
    } else if (marks >= 50) {
        return 'Above Average';
    } else if (marks >= 45) {
        return 'C: Average';
    } else if (marks >= 40) {
        return 'P: Pass';
    } else {
        return 'F: Fail';
    }
}

function generateMarkSheet() {
   
    var USN = document.getElementById('USN').value;
    var csfpc = parseInt(document.getElementById('csfpc').value);
    var cs1100 = parseInt(document.getElementById('cs1100').value);
    var cs1201 = parseInt(document.getElementById('cs1201').value);
    var cs1801 = parseInt(document.getElementById('cs1801').value);
    var cs1306 = parseInt(document.getElementById('cs1306').value);

    
    var totalMarks = csfpc + cs1100 + cs1201 + cs1801 + cs1306;
    grade = calculateSubjectGrade(totalMarks);

    
    var markSheetDiv = document.getElementById('markSheet');
    markSheetDiv.innerHTML = '<h2>Mark Sheet</h2>' +
        '<p><strong>USN:</strong> ' + USN + '</p>' +
        '<p><strong>CS1000-Fundamentals of programming in c:</strong> ' + csfpc +'-'+ calculateSubjectGrade(csfpc)+'</p>' +
        '<p><strong>CS1100-digital systems:</strong> ' + cs1100 +'-'+ calculateSubjectGrade(cs1100)+ '</p>' +
        '<p><strong>CS1201-Data analysis with python:</strong> ' + cs1201 +'-'+ calculateSubjectGrade(cs1201)+'</p>' +
        '<p><strong>CS1801-Introduction to maths for cs theory:</strong> ' + cs1801 +'-'+ calculateSubjectGrade(cs1201)+'</p>' +
        '<p><strong>CS1306-Introduction To web design:</strong> ' + cs1306 +'-'+ calculateSubjectGrade(cs1306)+ '</p>' +
        '<p><strong>Total Marks:</strong> ' + totalMarks + '</p>';
}
