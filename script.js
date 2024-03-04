window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-x", window.scrollX + "px");
    document.documentElement.style.setProperty("--scroll-y", window.scrollY + "px");
  });

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


gsap.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.2
  })

  gsap.from("#tagline h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4,
    scrollTrigger:{
      trigger:"#tagline",
      scroller:"#main",
    }
  })

  gsap.from("#nav2",{
    scale:0,
    duration:1,
    scrollTrigger:{
      trigger:"#nav",
      scroller:"#main",
      markers:false,
    }
  })



  gsap.from("#page2 .main-container .product-container", {
    scale:0,
    duration:1,
    scrollTrigger: {
      trigger: "#page2 .main-container .product-container",
      scrollers:"#main",
      start:"top 180%" // Adjust this according to your desired end point
    }
  });

gsap.from("#page3 #behind h3", {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page3 #behind h3",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});

gsap.from("#page3 #behind h1", {
  
    scale:0,
    duration:1.6,
    scrollTrigger: {
        trigger: "#page3 #behind h1",
        scrollers:"#main",
        // markers:true,
        start:"top 70%" 
         // Adjust this according to your desired end point
        
    }
});

gsap.from("#page3 #behind p", {
  
    opacity:0,
    duration:1,
    scale:1.1,    
    scrollTrigger: {
        trigger: "#page3 #behind p",
        scrollers:"#main",
        // markers:true,
        start:"top 60%" 
         // Adjust this according to your desired end point
        
    }
});


gsap.from("#page4 #root1 h1", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.2,
    scrollTrigger: {
        trigger: "#page4 #root1 h1",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});
gsap.from("#page4 #root1 p", {
  
    opacity:0,
    duration:1,
    scale:1.1,    
    scrollTrigger: {
        trigger: "#page4 #root1 p",
        scrollers:"#main",
        // markers:true,
        start:"top 60%" 
         // Adjust this according to your desired end point
        
    }
});


gsap.from("#root2 #company1 #com1",{

    scale:0,
    duration:1,
   
    scrollTrigger:{
         
        trigger:"#root2 #company1 #com1",
        scrollers:"#main",
        // markers:true,
        start:"top 80%"

    }
})
gsap.from("#root2 #company1 h1", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.2,
    scrollTrigger: {
        trigger: "#root2 #company1 h1",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});
gsap.from("#root2 #company2 #com2",{

    scale:0,
    duration:1,
   
    scrollTrigger:{
         
        trigger:"#root2 #company2 #com2",
        scrollers:"#main",
        // markers:true,
        start:"top 80%"

    }
})
gsap.from("#root2 #company2 h1", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.2,
    scrollTrigger: {
        trigger: "#root2 #company2 h1",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});
gsap.from("#root2 #company3 #com3",{

    scale:0,
    duration:1,
   
    scrollTrigger:{
         
        trigger:"#root2 #company1 #com1",
        scrollers:"#main",
        // markers:true,
        start:"top 80%"

    }
})
gsap.from("#root2 #company3 h1", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.2,
    scrollTrigger: {
        trigger: "#root2 #company3 h1",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});

gsap.from("#root2 #company1 #bot", {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#root2 #company1 #bot",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});
gsap.from("#root2 #company2 #bot", {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#root2 #company2 #bot",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});

gsap.from("#root2 #company3 #bot", {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#root2 #company3 #bot",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});

gsap.from("#slid h1",{

    scale:1.5,
    duration:1,
   
    scrollTrigger:{
         
        trigger:"#slid h1",
        scrollers:"#main",
        // markers:true,
        start:"top 80%"

    }
})

gsap.from("#slid h2", {
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: "#slid h2",
        scrollers:"#main",
        // markers:true,
        start:"top 90%" // Adjust this according to your desired end point
        
    }
});

gsap.from("#page5 #map2",{

    scale:0,
    duration:1,
   
    scrollTrigger:{
         
        trigger:"#page5 #map2",
        scrollers:"#main",
        // markers:true,
        start:"top 90%"

    }
})

gsap.from("#map12 h1", {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#map12 h1",
        scrollers:"#main",
        // markers:true,
        start:"top 95%" // Adjust this according to your desired end point
        
    }
});

gsap.from("#map12 h3", {
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: "#map12 h3",
        scrollers:"#main",
        // markers:true,
        start:"top 70%" // Adjust this according to your desired end point
        
    }
});

gsap.from(".footer-section h1", {
    y:-50,
    opacity:0,
    delay:0.4,

    duration:1.3,
    scrollTrigger: {
        trigger: ".footer-section h1",
        scrollers:"#main",
        // markers:true,
        start:"top 70%" // Adjust this according to your desired end point
        
    }
});

gsap.from(".footer-section .footer-logo",{

    y:-50,
    opacity:0,
    delay:0.4,
   
    scrollTrigger:{
         
        trigger:".footer-section .footer-logo",
        scrollers:"#main",
        // markers:true,
        start:"top 80%"

    }
})