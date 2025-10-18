document.addEventListener('DOMContentLoaded', () => {
    // Tạo container để chứa các hiệu ứng bay
    const effectsContainer = document.createElement('div');
    effectsContainer.className = 'effects-container';
    document.body.prepend(effectsContainer); // Dùng prepend để nó nằm sau mọi thứ

    // Danh sách các ảnh hoa bạn đã chuẩn bị trong thư mục images/flowers/
    const flowerImages = [
        'images/flowers/hoa1.png',
        'images/flowers/hoa2.png',
        'images/flowers/hoa3.png'
    ];

    const numberOfElements = 40; // Số lượng phần tử bay trên màn hình cùng lúc

    for (let i = 0; i < numberOfElements; i++) {
        createFlyingElement();
    }

    // Hàm tạo một phần tử bay ngẫu nhiên (tim hoặc hoa)
    function createFlyingElement() {
        const element = document.createElement('div');
        element.className = 'flying-element';

        const isHeart = Math.random() > 0.4; // Tỷ lệ xuất hiện của tim (60%)

        if (isHeart) {
            element.classList.add('heart');
            element.innerHTML = '❤️'; // Sử dụng emoji trái tim
            element.style.fontSize = `${Math.random() * 1.5 + 1}rem`; // Kích thước ngẫu nhiên
        } else {
            element.classList.add('flower');
            const randomFlower = flowerImages[Math.floor(Math.random() * flowerImages.length)];
            element.style.backgroundImage = `url(${randomFlower})`;
            const size = Math.random() * 30 + 30; // Kích thước hoa từ 30-60px
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
        }

        // Vị trí xuất hiện ngẫu nhiên theo chiều ngang
        element.style.left = `${Math.random() * 100}vw`;

        // Thời gian và độ trễ animation ngẫu nhiên để không bị đồng đều
        element.style.animationDuration = `${Math.random() * 10 + 10}s`; // từ 10-20s
        element.style.animationDelay = `-${Math.random() * 20}s`; // Delay âm để animation bắt đầu ngay lập tức ở các điểm khác nhau

        effectsContainer.appendChild(element);
    }
});