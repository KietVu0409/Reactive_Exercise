// Challenge#1
console.log("Challenge#1");

// Dữ liệu cho Mark và John (Data 1)
const markMassData1 = 78; // kg
const markHeightData1 = 1.69; // mét

const johnMassData1 = 92; // kg
const johnHeightData1 = 1.95; // mét

// Tính toán BMI cho cả Mark và John (Data 1)
const markBmiData1 = markMassData1 / (markHeightData1 ** 2);
const johnBmiData1 = johnMassData1 / (johnHeightData1 ** 2);

// So sánh BMI của họ và lưu kết quả vào biến Boolean (Data 1)
const markHigherBmiData1 = markBmiData1 > johnBmiData1;

// Dữ liệu cho Mark và John (Data 2)
const markMassData2 = 95; // kg
const markHeightData2 = 1.88; // mét

const johnMassData2 = 85; // kg
const johnHeightData2 = 1.76; // mét

// Tính toán BMI cho cả Mark và John (Data 2)
const markBmiData2 = markMassData2 / (markHeightData2 ** 2);
const johnBmiData2 = johnMassData2 / (johnHeightData2 ** 2);

// So sánh BMI của họ và lưu kết quả vào biến Boolean (Data 2)
const markHigherBmiData2 = markBmiData2 > johnBmiData2;

// In kết quả cho cả hai tập dữ liệu
console.log("\nDữ liệu 1:");
console.log(`BMI của Mark: ${markBmiData1.toFixed(2)}`);
console.log(`BMI của John: ${johnBmiData1.toFixed(2)}`);
console.log(`BMI của Mark có cao hơn của John không? ${markHigherBmiData1}`);

console.log("\nDữ liệu 2:");
console.log(`BMI của Mark: ${markBmiData2.toFixed(2)}`);
console.log(`BMI của John: ${johnBmiData2.toFixed(2)}`);
console.log(`BMI của Mark có cao hơn của John không? ${markHigherBmiData2}`);



// Challenge#2
console.log("\n\nChallenge#2");

console.log("\nDữ liệu 1:")
if(markBmiData1 > johnBmiData1){
  console.log("BMI của Mark cao hơn của John")
}else{
  console.log("BMI của Mark thấp hơn của John")
}
console.log("\nDữ liệu 2:");
if(markBmiData2 > johnBmiData2){
  console.log(`BMI của Mark(${markBmiData2.toFixed(2)}) cao hơn của John(${johnBmiData2.toFixed(2)})`)
}else{
  console.log(`BMI của Mark(${markBmiData2.toFixed(2)}) thấp hơn của John(${johnBmiData2.toFixed(2)})`)
}



// Challenge#3
console.log("\n\nChallenge#3");

// Dữ liệu thử nghiệm 1
const diemDolphins1 = [96, 108, 89];
const diemKoalas1 = [88, 91, 110];

// Dữ liệu thử nghiệm Bonus 1
const diemDolphinsBonus1 = [97, 112, 101];
const diemKoalasBonus1 = [109, 95, 123];

// Dữ liệu thử nghiệm Bonus 2
const diemDolphinsBonus2 = [97, 112, 101];
const diemKoalasBonus2 = [109, 95, 106];

function tinhDiemTrungBinh(diem) {
  const tongDiem = diem.reduce((tong, diem) => tong + diem, 0);
  return tongDiem / diem.length;
}

function xacDinhNguoiChienThang(dolphins, koalas) {
  const diemTrungBinhDolphins = tinhDiemTrungBinh(dolphins);
  const diemTrungBinhKoalas = tinhDiemTrungBinh(koalas);

  if (diemTrungBinhDolphins >= 100 && diemTrungBinhDolphins > diemTrungBinhKoalas) {
    return "Dolphins thắng!";
  } else if (diemTrungBinhKoalas >= 100 && diemTrungBinhKoalas > diemTrungBinhDolphins) {
    return "Koalas thắng!";
  } else if (diemTrungBinhDolphins === diemTrungBinhKoalas && diemTrungBinhDolphins >= 100 && diemTrungBinhKoalas >= 100) {
    return "Hòa!";
  } else {
    return "Không ai thắng giải thưởng!";
  }
}

console.log("\nDữ liệu thử nghiệm 1: " + xacDinhNguoiChienThang(diemDolphins1, diemKoalas1));
console.log("Dữ liệu thử nghiệm Bonus 1: " + xacDinhNguoiChienThang(diemDolphinsBonus1, diemKoalasBonus1));
console.log("Dữ liệu thử nghiệm Bonus 2: " + xacDinhNguoiChienThang(diemDolphinsBonus2, diemKoalasBonus2));



// Challenge#4
console.log("\n\nChallenge#4");

// Gán giá trị bill
const bill_value1 = 275;
const bill_value2 = 40;
const bill_value3 = 430;

// Tính tip
function tinhTip(value){
  return (value >= 50 && value <=300) ? (value*15/100) 
        :(value*20/100);
}

// Tính hóa đơn + tip
function tinhBill(value){
  return (value >= 50 && value <=300) ? (value + value*15/100) 
        :(value + value*20/100);
}

// In kết quả bill_value1 = 275
console.log("\nHóa đơn là " + bill_value1 + ", tiền boa là " + tinhTip(bill_value1) + " và tổng giá trị " + tinhBill(bill_value1))
// In kết quả bill_value2 = 40
console.log("Hóa đơn là " + bill_value2 + ", tiền boa là " + tinhTip(bill_value2) + " và tổng giá trị " + tinhBill(bill_value2))
// In kết quả bill_value3 = 430
console.log("Hóa đơn là " + bill_value3 + ", tiền boa là " + tinhTip(bill_value3) + " và tổng giá trị " + tinhBill(bill_value3))


// Challenge#5
console.log("\n\nChallenge#5");

// Dữ liệu thử nghiệm 1
const diemDolphins1_5 = [44, 23, 71];
const diemKoalas1_5 = [65, 54, 49];

// Dữ liệu thử nghiệm 2
const diemDolphins2_5 = [85, 54, 41];
const diemKoalas2_5 = [23, 34, 27];

// Tính điểm trung bình calcAverage
function calcAverage(diem) {
  const tongDiem = diem.reduce((tong, diem) => tong + diem, 0);
  return tongDiem / diem.length;
}

// Xác định người chiến thắng
function checkWinner(dolphins, koalas) {
  const diemTrungBinhDolphins = calcAverage(dolphins);
  const diemTrungBinhKoalas = calcAverage(koalas);

  if (diemTrungBinhDolphins > diemTrungBinhKoalas*2) {
    return "Dolphins thắng (" + diemTrungBinhDolphins + " vs " + diemTrungBinhKoalas + ")";
  } else if (diemTrungBinhKoalas > diemTrungBinhDolphins*2) {
    return "Koalas thắng (" + diemTrungBinhKoalas + " vs " + diemTrungBinhDolphins + ")";
  } else {
    return "Không ai thắng giải thưởng!";
  }
}

// Xuất dữ liệu
console.log("\nDữ liệu thử nghiệm 1: " + checkWinner(diemDolphins1_5, diemKoalas1_5));
console.log("Dữ liệu thử nghiệm 2: " + checkWinner(diemDolphins2_5, diemKoalas2_5));



// Challenge#6
console.log("\n\nChallenge#6\n");

// Dữ liệu thử nghiệm 1
const bills = [125, 555, 44];

function tinhTip(value){
  return (value >= 50 && value <=300) ? (value*15/100) 
        :(value*20/100);
}

function calcTip(bill) {
  const tips = [0, 0, 0];
  for(let i = 0; i < bill.length; i++)
    tips[i] =  tinhTip(bill[i]);
  return tips;
}
const tips = calcTip(bills);

function tinhTotalBill(bill){
  const total = [0, 0, 0];
  for(let i = 0; i < bill.length; i++)
    total[i] =  bill[i] + tips[i];
  return total;
}
console.log(bills)
console.log(tips);
console.log(tinhTotalBill(bills));



// Challenge#7
console.log("\n\nChallenge#7\n");

// Định nghĩa đối tượng cho Mark và John
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// Tính toán BMI cho Mark và John
mark.calcBMI();
john.calcBMI();

// So sánh BMI của họ và in kết quả ra console
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) cao hơn so với của ${john.fullName} (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) cao hơn so với của ${mark.fullName} (${mark.bmi.toFixed(1)})!`);
} else {
  console.log(`${mark.fullName} và ${john.fullName} có cùng BMI (${mark.bmi.toFixed(1)})!`);
}



// Challenge#8
console.log("\n\nChallenge#8\n");

// Tạo mảng 'bills' chứa các giá trị hóa đơn
const bills_8 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Tạo các mảng rỗng cho tips và totals
const tips_8 = [];
const totals_8 = [];

// Sử dụng hàm 'calcTip' để tính toán tips và tổng (bill + tip) cho mỗi giá trị hóa đơn trong mảng 'bills'
function calcTip(value){
  return (value >= 50 && value <=300) ? (value*15/100) 
        :(value*20/100);
}
for (let i = 0; i < bills_8.length; i++) {
  const tip = calcTip(bills_8[i]);
  tips_8.push(tip);
  totals_8.push(bills_8[i] + tip);
}

// In ra các giá trị tips và tổng tương ứng
console.log('Tips:', tips_8);
console.log('Totals:', totals_8);

// Hàm 'calcAverage' để tính trung bình của mảng 'arr'
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Gọi hàm 'calcAverage' với mảng 'totals' và in ra kết quả
const averageTotal = calcAverage(totals_8);
console.log('Average Total:', averageTotal);



// Challenge#9
console.log("\n\nChallenge#9\n");

// Hàm printForecast
function printForecast(arr) {
  let forecastString = '';
  
  for (let i = 0; i < arr.length; i++) {
    forecastString += `... ${arr[i]}°C in ${i + 1} days `;
  }

  console.log(forecastString);
}

// Test với dữ liệu mẫu
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Xuất kết quả dữ liệu
console.log("Data 1 Forecast:");
printForecast(data1);

console.log("Data 2 Forecast:");
printForecast(data2);