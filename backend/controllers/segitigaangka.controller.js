export const segitigaangka = (req, res) => {
  console.log(req.body);
  const { angka } = req.body;
  let a = '';
  for (let i = 0; i < angka; i++) {
    for (let j = 0; j <= i; j++) {
      a += i;
    }
    a += '\n';
  }
  console.log(a);
};
