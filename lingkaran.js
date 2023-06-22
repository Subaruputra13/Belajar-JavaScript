import phi from "./konstantMatematika.js";

const hitungLuas = (r) => {
  let luas = phi * r * r;
  return luas;
};

const hitungKeliling = (r) => {
  let luas = 2 * phi * r;
  return luas;
};

export default { hitungKeliling, hitungLuas };
