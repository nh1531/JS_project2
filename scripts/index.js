// 각 이미지 표시 함수
const showFlower = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    // 속성값 바꿈. img의 src를 바꿈 
    // ex. innerHTML -> <시작태그> ... </종료태그> 태그 사이의 ...를 바꿈
    imgView1.setAttribute("src", "./images/cityFlower.png");
    imgViewText.innerHTML = "동백꽃";
    txtWrap.style.display = "block";
    console.log(imgView1);

}
const showBird = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", "./images/cityBird.png");
    imgViewText.innerHTML = "갈매기";
    txtWrap.style.display = "block";
}
const showFish = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", "./images/cityFish.png");
    imgViewText.innerHTML = "고등어";
    txtWrap.style.display = "block";
}

// 하나의 함수로 처리
const show = (idx) => {
    const pngName = ['cityFlower','cityBird', 'cityFish'];
    const txt = ['동백꽃', '갈매기', '고등어'];

    console.log(pngName[idx], txt[idx]);

    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", `./images/${pngName[idx]}.png`);
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display = "block";

} 

// DOM 로드 후
document.addEventListener("DOMContentLoaded", () => {
    /*
    const imgIcon1 = document.querySelector("#imgIcon1"); // id 사용
    const imgIcon2 = document.getElementById("imgIcon2"); // class 사용
    const imgIcon3 = document.getElementById("imgIcon3"); 

    imgIcon1.addEventListener("mouseover", () => show(0));
    imgIcon2.addEventListener("mouseover", () => show(1));
    imgIcon3.addEventListener("mouseover", () => show(2));

    // imgIcon3.addEventListener("mouseover", showFish);
    */

    const imgIconItems = document.querySelectorAll(".imgIconItem"); // class가 같은 것
    console.log(imgIconItems);
    
    for(let [k, item] of imgIconItems.entries()){ // k, item 순서 바뀌면 안나옴
        console.log(k, item);
        item.addEventListener("mouseover", ()=>show(k));
    }

});