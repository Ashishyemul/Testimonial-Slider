const testimonials = ["I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible. The work is top-notch and I consistently outrank all my competitors on Google.","Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.", "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing", "The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012."];
const authors = ["Roland Weedon","Kelsi Gordon","Seth Gewirtz","Mike Brashears"]
const imgUrl = "https://source.unsplash.com/random/150x150/?face"
const author = document.querySelector("#author")
const testimonial = document.querySelector("#testimonials")
const image = document.querySelector(".image-container")
const imgsarray = [
    "https://source.unsplash.com/random/150x150/?puma",
    "https://source.unsplash.com/random/150x150/?cat",
    "https://source.unsplash.com/random/150x150/?dog",
    "https://source.unsplash.com/random/150x150/?tiger",

]

let count = 0; 
function changeTest() {
    author.textContent = authors[count]
    testimonial.textContent = testimonials[count]
    image.innerHTML =`<img src=${imgsarray[count]} alt="Person Image id="image">`
    count++;
    console.log(count)
    if(count > authors.length-1){
        count = 0;
    }
}

 setInterval(changeTest,5000)