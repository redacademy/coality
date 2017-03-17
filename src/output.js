const printWelcome = () => {
  console.log('----------------------------------------------------------------------------------'.rainbow);
  console.log();
  console.log(`{{{{{`.rainbow, `${'RED'.red} Skunkz - ʕ•ᴥ•ʔ 🚀  Checking code ${'coality'.blue}...`, `}}}}}`.rainbow);
  console.log();
}

const printEnd = () => {
  console.log('----------------------------------------------------------------------------------'.rainbow);
}

const getColour = (severity) => {
  switch (severity) {
    case 1:
      return 'yellow';
    case 2:
      return 'red';
  }
}

module.exports = {
  printWelcome,
  printEnd,
  getColour
};
