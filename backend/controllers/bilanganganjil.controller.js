export const bilanganganjil = (req, res) => {
  console.log(req.body);
  const { angka } = req.body;
  const bilGanjil = [];
  for (let i = 0; i < angka; i++) {
    if (i % 2 !== 0) {
      bilGanjil.push(i);
    }
  }
  console.log(bilGanjil);
  res.status(200).json({ data: bilGanjil });
};
