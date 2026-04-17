function showMessage() {
    document.getElementById("message").innerHTML = "Welcome to my portfolio!";
}

function toggleSkills() {
    const skills = document.getElementById("skillsList");
    if (!skills) return;
    skills.style.display = skills.style.display === "none" ? "block" : "none";
}

function showMore() {
    const more = document.getElementById("moreProjects");
    if (!more) return;
    more.style.display = more.style.display === "block" ? "none" : "block";
}

function downloadCV() {
    alert("Download will be available soon. Please Hire me for a copy of the resume.");

    // Future interactivity (animations, typing effect, etc.) can be added here.
    console.log("Resume loaded successfully");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("error").innerHTML = "Please fill all fields!";
        return false;
    }

    alert("Form submitted!");
    return true;
}

const carouselImages = [
    'image/me2.jpg',
    'image/ren3.jpg',
    'image/rne.jpg',
    'image/605690889_2921060191617999_2608873562971458940_n.jpg'
]

let carouselIndex = 0;
const carouselImage = document.getElementById('carouselImage');

function showCarouselImage(index) {
    if (!carouselImage) return;
    carouselImage.src = carouselImages[index];
}

function nextCarousel() {
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    showCarouselImage(carouselIndex);
}

function prevCarousel() {
    carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
    showCarouselImage(carouselIndex);
}

if (carouselImage) {
    setInterval(nextCarousel, 3000);
}

const boxes = document.querySelectorAll('.skill-box');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 10.85;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      setTimeout(() => {
        box.classList.add('show');
      }, index * 500); 
    }
  });
});
