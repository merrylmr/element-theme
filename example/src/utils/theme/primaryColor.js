export const primaryColorFn = (obj) => {
  return `
   .text-primary{
    color:${obj.mainColor}!important;
  }
  .header-component{
     background-color:${obj.mainColor}!important;
  }`
};

