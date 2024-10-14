export const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };