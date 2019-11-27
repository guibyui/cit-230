const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
const src = img.getAttribute("data-src");
if(!src) {
    return;
}

img.src = src;
}

const imgOptions ={
    threshold: 1,
    rootMargin:"0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entries => {
        if (!entries.isIntersecting) {
            return;
        } else {
            preloadImage(entries.target);
            imgObserver.unobserve(entries.target);
        }
    })
}, imgOptions);


images.forEach(image => {
    imgObserver.observe(image)
})