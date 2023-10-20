export const bilanganganjil = (req, res) => {
  console.log(req.body);
  const { angka } = req.body;
  for (let i = 0; i < angka; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
