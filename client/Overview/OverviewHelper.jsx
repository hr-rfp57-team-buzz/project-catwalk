export const resetSelectedStyle = (styles) => {
  for (let i = 0; i < styles.length; i++) {
    styles[i].selected = false;
  }
};

export const sortSizes = (style) => {
  const result = [];
  for (let key in style.skus) {
    result.push([style.skus[key]['size'], style.skus[key]['quantity'], key]);
  }
  return result;
};