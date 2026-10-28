//calculate electricity bill using diffrent price slab

const totalUnits = 200;
const unitPrice = 10; //for commercial
const gst = 18;
const govSaveUnit = 50;

function bilCalculate() {
  const totalUnit = Number(totalUnits - govSaveUnit);
  const Price = Number(totalUnit * unitPrice);
  const TotalGst = Number(Price / gst);
  console.log(`Total Bill: ₹${Number(Price + TotalGst).toFixed(2)}`);
}

bilCalculate();
