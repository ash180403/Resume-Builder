document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const school = document.getElementById('school').value;
    const gradYear = document.getElementById('grad-year').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const years = document.getElementById('years').value;
    const skills = document.getElementById('skills').value;

    const resumeOutput = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>School/University:</strong> ${school}</p>
        <p><strong>Year of Graduation:</strong> ${gradYear}</p>
        <h3>Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Years Worked:</strong> ${years}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    document.getElementById('resume-output').innerHTML = resumeOutput;
});
