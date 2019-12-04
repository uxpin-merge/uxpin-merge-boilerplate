module.exports = {
  getCacheKey() {
    // The output is always the same.
    return `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           xml:space="preserve"
           id="icon-add-to-favorites"
           x="0px" y="0px"
           width="16" height="14"
           viewBox="0 0 16 14">
          <path d="M3.4,10.5V8.2H0V7h3.4V4.7L8,7.6L3.4,10.5z M14.7,1.2C13.9,0.4,12.9,0,11.9,0s-2,0.4-2.8,1.2
          L8,2.2l-1.1-1C6.1,0.4,5.1,0,4.1,0s-2,0.4-2.8,1.2c-0.6,0.6-1,1.1-1.2,2.3h1.2C1.4,2.6,1.7,2.4,2.1,2c0.6-0.5,1.3-0.8,2-0.8
          s1.5,0.3,2,0.8l1.1,1L8,3.8L8.8,3l1.1-1c0.5-0.5,1.3-0.8,2-0.8c0.7,0,1.5,0.3,2,0.8c0.6,0.6,1,1.4,1,2.3s-0.3,1.7-1,2.3L8,12.4
          l-0.7-0.7H5.7l0,0L8,14l6.7-6.6C16.4,5.7,16.4,2.9,14.7,1.2z"/>
      </svg>`;
  },
  process() {
    return 'module.exports = {};';
  },
};
