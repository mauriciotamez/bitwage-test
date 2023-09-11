function generateRandomStatus() {
  return Math.random() < 0.5 ? 'Active' : 'Inactive';
}

function generateRandomMethod() {
  const methods = ['Organic Search', 'Direct Traffic', 'Referral', 'Social Media'];
  const randomIndex = Math.floor(Math.random() * methods.length);
  return methods[randomIndex];
}

function generateRandomAmount() {
  return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

const dataArray = Array.from({ length: 50 }, (_, index) => ({
  id: `PVUV${index + 1}`,
  status: generateRandomStatus(),
  method: generateRandomMethod(),
  amount: generateRandomAmount(),
}));

export default dataArray;
