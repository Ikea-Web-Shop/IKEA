function Importer(r: __WebpackModuleApi.RequireContext) {
  let images = {};
  r.keys().map((item: string) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = Importer(
  require.context("../Assets/Images/", true, /\.(png|jpe?g|svg|jpg)$/)
);
export default images;


// function importer(){

// }

// export default importer;
