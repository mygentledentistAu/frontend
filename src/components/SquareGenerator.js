import { useEffect } from 'react';

const SquareGenerator = () => {
  const colors = ['#711c91', '#ea00d9', '#0abdc6', '#133e7c'];

  const createSquare = () => {
    const section = document.querySelector('.ani');
    const square = document.createElement('span');

    const size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * window.innerHeight + 'px';
    square.style.left = Math.random() * window.innerWidth + 'px';

    square.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    section.appendChild(square);

    setTimeout(() => {
      square.remove();
    }, 5000);
  };

  useEffect(() => {
    const intervalId = setInterval(createSquare, 150);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  return <section></section>;
};

export default SquareGenerator;
