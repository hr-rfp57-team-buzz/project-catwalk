export const resetSelectedStyle = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].selected = false;
  }
};

export const sortSizes = (product) => {
  const result = [];
  for (let key in product.skus) {
    result.push([product.skus[key]['size'], product.skus[key]['quantity'], key]);
  }
  return result;
};