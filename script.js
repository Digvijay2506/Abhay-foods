document.addEventListener("DOMContentLoaded", function() {
    const slide = document.getElementById("slide");
    const images = slide.querySelectorAll("img");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.classList.add("active");
            } else {
                image.classList.remove("active");
            }
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    rightArrow.addEventListener("click", nextImage);

    leftArrow.addEventListener("click", prevImage);

    showImage(currentImageIndex);

    setInterval(nextImage, 5000);
});

$('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });



  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('#slid .slider');
    const slides = document.querySelectorAll('#slid .slide');
    const leftArrow = document.querySelector('#slid .left-arrow');
    const rightArrow = document.querySelector('#slid .right-arrow');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide after the last
        updateSlider();
    }

    function updateSlider() {
        slides.forEach(slide => slide.classList.remove('visible'));
        slides[currentSlide].classList.add('visible');
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    leftArrow.addEventListener('click', function() {
        clearInterval(slideInterval); // Stop automatic slide change
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateSlider();
        slideInterval = setInterval(nextSlide, 3000); // Resume automatic slide change
    });

    rightArrow.addEventListener('click', function() {
        clearInterval(slideInterval); // Stop automatic slide change
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateSlider();
        slideInterval = setInterval(nextSlide, 3000); // Resume automatic slide change
    });

    updateSlider();
});

  
  // Example: Add a click event to the flip-card to toggle the flip effect
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.flip-card-inner').classList.toggle('is-flipped');
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var productsBtn = document.getElementById('products-btn');
    var dropdownContent = document.getElementById('dropdown-content');

    productsBtn.addEventListener('click', function() {
        productsBtn.style.boxShadow = "-20px 8px 25px 0px pink";
        
        dropdownContent.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
      

        if (!productsBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            productsBtn.style.boxShadow = "none";

            dropdownContent.classList.remove('show');
        }
    });
});

var storelocator = document.querySelector("#nav3 #sm");

storelocator.addEventListener("click", function() {
    window.location.href = "https://www.google.com/maps?q=Ice+cream+manufacturers+-+Abhay+Ice+Cream,+ABHAY+ICECREAM+Poorva+Foods+Abhay+ice+cream+Shirol,+Wadi+Road,+Jaysingpur,+Maharashtra+416101&ftid=0x3bc11f6b48f390a3:0x739e9c4574270195&entry=gps&lucs=,47071704,47069508,94208286,47084304,94206605&g_ep=CAISDTYuMTA0LjIuNDU1OTAYACDXggMqLSw0NzA3MTcwNCw0NzA2OTUwOCw5NDIwODI4Niw0NzA4NDMwNCw5NDIwNjYwNUICSU4%3D&g_st=iw";
});


document.addEventListener('DOMContentLoaded', function() {
    var aboutUsElement = document.querySelector('#nav1 h3:nth-child(3)'); // Adjusted to target the third <h3> within #nav1

    aboutUsElement.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the click event
        var footerSection = document.getElementById('page6');
        footerSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the footer
    });
});




// Event listener to open the popup form when the "Wholesale" element is clicked
document.getElementById("con").addEventListener("click", function(event) {
    console.log("Element clicked"); // Debugging statement
    event.preventDefault(); // Prevent the default action of the element
    openPopupForm();
});

// Function to open the popup form
function openPopupForm() {
    console.log("Opening popup form"); // Debugging statement
    var popup = document.getElementById("popupForm");
    popup.style.display = "block";
}

// Function to close the popup form
function closePopupForm() {
    console.log("Closing popup form"); // Debugging statement
    var popup = document.getElementById("popupForm");
    popup.style.display = "none";
}

