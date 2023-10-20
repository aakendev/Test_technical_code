export const bilanganprima = (req, res) => {
  console.log(req.body);
  const { angka } = req.body;
  const bilPrima = [];
  function prima(angka) {
    for (let i = 2; i < angka; i++) {
      if (angka % i === 0) {
        return false;
      }
    }
    return angka > 1;
  }
  for (let i = 1; i <= angka; i++) {
    if (prima(i)) {
      bilPrima.push(i);
    }
  }
  console.log(bilPrima);
  res.status(200).json({ data: bilPrima });
};
