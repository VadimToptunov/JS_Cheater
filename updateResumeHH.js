function updateResume(resumeId){
    var $updateResumeButtons =  $('*[data-qa="resume-update-button"]'); 
    $updateResumeButtons[resumeId].click();
}

setInterval(updateResume(0), 14400000); //0 is set for the newest resume(the latest added).
//The script finds a button "Update Resume" on "My resumes" page on hh.ru and clicks it once in 4 hours to promote the resume in search.  
