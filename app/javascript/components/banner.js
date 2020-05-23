import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["COMING", "SOON", "STAY TUNED"],
    typeSpeed: 110,
    loop: true
  });
}

export { loadDynamicBannerText };
