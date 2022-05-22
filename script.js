// Corner Option button
var button=document.createElement("div");
button.setAttribute("class","toggle-btn");
var a=document.createElement("span");
var b=document.createElement("span");
var c=document.createElement("span");
button.append(a);
button.append(b);
button.append(c);
document.body.append(button);
// YouTube Logo
var image=document.createElement("img");
image.setAttribute("src","https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg");
image.setAttribute("class","logo");
image.setAttribute("alt","");
document.body.append(image);

// Search bar and its text search
var d2=document.createElement("div");
d2.setAttribute("class","search-box");
var bar=document.createElement("input");
bar.setAttribute("type","text");
bar.setAttribute("class","search-bar");
bar.setAttribute("placeholder","search");
d2.append(bar);
document.body.append(d2);

// Search button
var button2=document.createElement("button");
button2.setAttribute("class","search-btn");
var sear=document.createElement("img");
sear.setAttribute("src","https://img.icons8.com/glyph-neue/2x/search.png");
sear.setAttribute("alt","");
button2.append(sear);
d2.append(button2);

var d3=document.createElement("div");
d3.setAttribute("class","user-options");
var video=document.createElement("img");
video.setAttribute("src","https://cdn-icons-png.flaticon.com/128/711/711245.png");
video.setAttribute("class","icon");
video.setAttribute("alt","");
var grid=document.createElement("img");
grid.setAttribute("src","https://cdn-icons-png.flaticon.com/128/847/847455.png");
grid.setAttribute("class","icon");
grid.setAttribute("alt","");
var bell=document.createElement("img");
bell.setAttribute("src","https://cdn-icons-png.flaticon.com/128/1827/1827349.png");
bell.setAttribute("class","icon");
bell.setAttribute("alt","");
d3.append(video);
d3.append(grid);
d3.append(bell);
document.body.append(d3);

var dp=document.createElement("div");
dp.setAttribute("class","user-dp");
var propic=document.createElement("img");
propic.setAttribute("src","joker.png");
propic.setAttribute("alt","");
dp.append(propic);


/* Navigation Panel */
var panel=document.createElement("nav");
panel.setAttribute("class","navbar");
panel.append(button);
panel.append(image);
panel.append(d2);
panel.append(d3);
panel.append(dp);
document.body.append(panel);

/* Sidebar Options */
// HOME
var image1=document.createElement("img");
image1.setAttribute("src","https://img.icons8.com/glyph-neue/2x/home-page.png");
image1.setAttribute("alt","");
var home=document.createElement("a");
home.setAttribute("href","#");
home.setAttribute("class","Links active");
home.innerHTML="Home";
home.append(image1);
var sbar=document.createElement("div");
sbar.setAttribute("class","side-bar");
sbar.append(home);
// Explore
var image2=document.createElement("img");
image2.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LRYpng_maz32OhAb74CX8mocaEIj6E9HEg&usqp=CAU");
image2.setAttribute("alt","");
var explore=document.createElement("a");
explore.setAttribute("href","#");
explore.setAttribute("class","Links");
explore.append(image2);
explore.innerHTML="Explore";
sbar.append(explore);
// Subscription
var image3=document.createElement("img");
image3.setAttribute("src","https://img.icons8.com/glyph-neue/2x/home-page.png");
image3.setAttribute("alt","");
var Subscription=document.createElement("a");
Subscription.setAttribute("href","#");
Subscription.setAttribute("class","Links");
Subscription.append(image3);
Subscription.innerHTML="Subscription";
sbar.append(Subscription);
// Wall
var seperate=document.createElement("hr");
seperate.setAttribute("class","seperator");
sbar.append(seperate);
//library
var image4=document.createElement("img");
image4.setAttribute("src","https://img.icons8.com/glyph-neue/2x/home-page.png");
image4.setAttribute("alt","");
var lib=document.createElement("a");
lib.setAttribute("href","#");
lib.setAttribute("class","Links");
lib.append(image3);
lib.innerHTML="Library";
sbar.append(lib);
//History
var image5=document.createElement("img");
image5.setAttribute("src","https://img.icons8.com/glyph-neue/2x/home-page.png");
image5.setAttribute("alt","");
var his=document.createElement("a");
his.setAttribute("href","#");
his.setAttribute("class","Links");
his.append(image3);
his.innerHTML="History";
sbar.append(his);
//Your Video
var image6=document.createElement("img");
image6.setAttribute("src","https://img.icons8.com/glyph-neue/2x/home-page.png");
image6.setAttribute("alt","");
var yvideo=document.createElement("a");
yvideo.setAttribute("href","#");
yvideo.setAttribute("class","Links");
yvideo.append(image3);
yvideo.innerHTML="Your Videos";
sbar.append(yvideo);
//Watch later
var image7=document.createElement("img");
image7.setAttribute("src","https://img.icons8.com/glyph-neue/2x/home-page.png");
image7.setAttribute("alt","");
var wl=document.createElement("a");
wl.setAttribute("href","#");
wl.setAttribute("class","Links");
wl.append(image3);
wl.innerHTML="Watch Later";
sbar.append(wl);
//Liked videos
var image8=document.createElement("img");
image8.setAttribute("src","https://img.icons8.com/glyph-neue/2x/home-page.png");
image8.setAttribute("alt","");
var lv=document.createElement("a");
lv.setAttribute("href","#");
lv.setAttribute("class","Links");
lv.append(image3);
lv.innerHTML="Liked Videos";
sbar.append(lv);
//Show More
var image9=document.createElement("img");
image9.setAttribute("src","https://img.icons8.com/glyph-neue/2x/home-page.png");
image9.setAttribute("alt","");
var sm=document.createElement("a");
sm.setAttribute("href","#");
sm.setAttribute("class","Links");
sm.append(image3);
sm.innerHTML="Show More";
sbar.append(sm);

document.body.append(sbar);

// /* Filters */
var dtag=document.createElement("div");
dtag.setAttribute("class","filter");
var button3=document.createElement("button");
button3.setAttribute("class","filter-options active");
button3.innerText="All";
dtag.append(button3);

var button4=document.createElement("button");
button4.setAttribute("class","filter-options");
button4.innerText="CSS";
dtag.append(button4);

var button5=document.createElement("button");
button5.setAttribute("class","filter-options");
button5.innerText="Web Development";
dtag.append(button5);

var button6=document.createElement("button");
button6.setAttribute("class","filter-options");
button6.innerText="Python";
dtag.append(button6);

var button7=document.createElement("button");
button7.setAttribute("class","filter-options");
button7.innerText="Entertainment";
dtag.append(button7);

var button8=document.createElement("button");
button8.setAttribute("class","filter-options");
button8.innerText="Marvel";
dtag.append(button8);

var button9=document.createElement("button");
button9.setAttribute("class","filter-options");
button9.innerText="Javascript";
dtag.append(button9);

var button10=document.createElement("button");
button10.setAttribute("class","filter-options");
button10.innerText="trending";
dtag.append(button10);

document.body.append(dtag);

// /* Video */

 var vid=document.createElement("div");
 vid.setAttribute("class","video-container");
// var dtag1=document.createElement("div");
// dtag1.setAttribute("class","video");
// vid.append(dtag1);
// var img=document.createElement("img");
// img.setAttribute("src","peaky.png");
// img.setAttribute("class","thumbnail");
// img.setAttribute("alt","");
// dtag1.append(img);

// var dtag2=document.createElement("div");
// dtag2.setAttribute("class","content");
// dtag1.append(dtag2);
// var img2=document.createElement("img");
// img2.setAttribute("src","netflix.png");
// img2.setAttribute("class","channel-icon");
// img2.setAttribute("alt","");
// dtag2.append(img2);

// var dtag3=document.createElement("div");
// dtag3.setAttribute("class","info");
// var bold=document.createElement("h4");
// bold.setAttribute("class","title");
// bold.innerText="Peaky Blinders Season 6 Official Trailer | Netflix India";
// var para=document.createElement("p");
// para.setAttribute("class","channel-name");
// para.innerText="Netflix";
// dtag3.append(bold);
// dtag2.append(dtag3);
// dtag3.append(para);
 document.body.append(vid);
const VideoCardContainer=document.querySelector('.video-container');

let api_key="AIzaSyA_f7mM6gpo11tfLj4eS8Eb6iVHdeOURYE";
let video_http="https://www.googleapis.com/youtube/v3/videos?";
let channel_http="https://www.googleapis.com/youtube/v3/channels?"; 

fetch(video_http+ new URLSearchParams({
    key:api_key,
    part:'snippet',
    chart:'mostPopular',
    maxResults:50,
    regionCode:'IN'
}))
.then(res=>res.json())
.then(data=>{
    // console.log(data);
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err=>console.log(err));
const getChannelIcon=(video_data)=>{
    fetch(channel_http+ new URLSearchParams({
        key:api_key,
        part:'snippet',
        id:video_data.snippet.channelId
    }))
    .then(res=>res.json())
    .then(data=>{
        video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard=(data)=>{
    VideoCardContainer.innerHTML += 
    `
    <div class="video" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}"vclass="thumbail" alt="">
            <div class="content">
                <img src="${data.channelThumbnail}" class="channel-icon" alt="">
                    <div class="info">
                        <h4 class="title">${data.snippet.title}</h4>
                        <p class="channel-name"${data.snippet.channelTitle}></p>
                    </div>
                </div>
     </div>
    `;
}