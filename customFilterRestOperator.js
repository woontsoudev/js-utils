const customFilter = (...args) => {
  return args.filter(el => el === 1);
};

console.log(customFilter(1, 2, 3));

// result = [1]
