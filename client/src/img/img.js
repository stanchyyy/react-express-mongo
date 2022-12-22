function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   export const IngredientsImg = importAll(require.context('./ingredients', false, /\.(png|jpe?g|svg)$/));