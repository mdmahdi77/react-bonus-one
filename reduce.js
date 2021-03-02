const nums = [12, 25, 37, 29, 100];
    nums.map(num => num * 2);
    nums.filter(num => num > 20);
    nums.find(num => num > 20)
const total = nums.reduce( (sum, num) => {
    return sum + num
    }, 0)  //arrow suntion a jodi carli bracket deya hoi tahole return dite hobe naahole undefined hobe....bracket na thakle return deya jabe na
console.log(total)

const friends = [
    {name: "Rashed", money: 12},
    {name: "Nashed", money: 28},
    {name: "Dashed", money: 35},
    {name: "Dashed", money: 45},
    {name: "Sashed", money: 73},
    {name: "Fashed", money: 100}
];
const totalMoney = friends.reduce((sum, friend) => sum + friend.money, 0);
console.log(totalMoney)