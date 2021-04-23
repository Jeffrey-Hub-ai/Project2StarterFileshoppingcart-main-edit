// Variables
const courses = document.querySelector('#courses-list');



// Listeners

loadEventListeners();

function loadEventListeners() {
    // when a new course is added
    courses.addEventListener('click', buyCourse);
}





// Functions

function buyCourse(e) {
    e.preventDefault();
    // use the delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart')) {
       // read the course values
        const course = e.target.parentElement.parentElement;

        // read the values
        getCourseInfo(course);
    }
}
// read the HMTL information of the selected course
function getCourseInfo(course) {
        console.log(course);
}