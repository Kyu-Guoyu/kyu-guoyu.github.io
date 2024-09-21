document.addEventListener('mousemove', function(e) {  
    const x = e.clientX / window.innerWidth * 100;  
    const y = e.clientY / window.innerHeight * 100;  
    document.body.style.setProperty('--mouse-x', x + 'vw');  
    document.body.style.setProperty('--mouse-y', y + 'vh');  
});  
  
// 示例：使用CSS变量来改变背景颜色或添加其他效果  
// 在CSS中添加：  
// body::before {  
//     content: "";  
//     position: fixed;  
//     top: 0;  
//     left: 0;  
//     width: var(--mouse-x);  
//     height: 100%;  
//     background: rgba(255, 0, 0, 0.5);  
//     z-index: -1;  
//     pointer-events: none;  
// }  
  
// 对于滚轮效果，你可以添加滚动监听器来改变图片的透明度或位置  
window.addEventListener('wheel', function(e) {  
    const delta = e.deltaY * -0.01;  
    const images = document.querySelectorAll('.software-image');  
    images.forEach(img => {  
        img.style.transform = `translateY(${delta}px)`;  
    });  
});
