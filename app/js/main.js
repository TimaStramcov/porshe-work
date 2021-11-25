const differenceContainer = document.querySelectorAll('.porsche-difference__slider');

differenceContainer.forEach(item => {
    const circleElem = item.querySelector('.circle');
    const diferenceItem = item.querySelector('.difference__slider-change-item');

    circleElem.onmousedown = event => {
        event.preventDefault();

        const shiftX = event.clientX - circleElem.getBoundingClientRect().left;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - item.getBoundingClientRect().left;

            if (newLeft < 50) {
            newLeft = 50;
            }
            let rightEdge = item.offsetWidth - circleElem.offsetWidth;
            if (newLeft > rightEdge) {
            newLeft = rightEdge;
            }

            circleElem.style.left = newLeft + 'px';
            diferenceItem.style.maxWidth = newLeft + 'px'
        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };

    circleElem.ondragstart = function() {
    return false;
    };
});