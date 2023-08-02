export const onContactButtonClick = () => {
  const element = document.getElementById('contact-me');

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};
