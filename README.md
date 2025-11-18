1. type alias আর type interface হল TypeSctipt এর টাইপ সেইপ ডিফাইন করার একটি পন্থা। type alias আর type interface কাজ প্রায় একই হলে এদের ব্যবহারে কিছুটা ভিন্নতা রয়েছে। যেমন type alias সব ধরনের অর্থাৎ Primitive এবং Non Primitive ডাটা টাইপ ডিফাইন করতে পারলেও type interface শুধুমাত্র ডাটা টাইপ ডিফাইন করতে পারে। type alias union(|) ব্যবহার করা যায় যা type interface এর ক্ষেত্রে ব্যবহার করা যাই না। type interface এ টাইপ ডিফাইন করা সময় object এর মত করে ডিফাইন করতে হয়। নিচে কয়েকটি উদাহারণ দেওয়া হল।

---->type alias<----

type Name = string;
type Age = string | number;
type IsMarried = boolean
type User = {
id: number;
name: string;
address: {
city: string;
town: string
}
}

----->type interface<-----

interface Student {
id: number;
name: string;
class: number;
roll: number;
address: string;
}

2. TypeScript keyof ব্যবহার হয় কোন এক object type এর property গুলো পাওয়ার জন্য। অর্থাৎ Object type এর key গুলোকে একসাথে পাওয়ার জন্য।এতে key গুলো union মাধ্যমে একটা টাইপ হয়ে যায় । যাতে সেটাকে একটা টাইপ হিসেবে ব্যবহার করা যায়। উদাহরণ সরূপ নিচে দেওয়া হলঃ

interface Developer {
name: string;
email: string;
device: string;
age: number;
salary: number;
}

এখন keyof Developer এর মান হবে --> 'name' | 'email'| 'device'| 'age'| 'salary'

<-------usecase------>

const getAnyInfoOfDeveloper =(developer: Developer, key: keyof Developer) => {
return developer[key];
}

3.  any type: ইতি যেকোনো ধরনের ডাটা টাইপ নিতে পারে। সেটা হোক স্ট্রিং বা যেকোনো টাইপ ।

let data: any;

data = 10;  
data = "hello";  
data = { a: 1 };

unknown টাইপ তখনই ব্যবহৃত হয় যখন কি ধরনের ডাটা টাইপ আসবে সেটা নিশ্চিত হতে না পারে। এটি রানটাইমে গিয়ে বুঝা যায় যে কোন ধরনের ডাটা আসবে এবং সে অনুযায়ী validation or type narrowing এর মাধ্যমে প্রত্যাশিত কাজ করে নিতে হয়।

function logValue(value: unknown): void {
if (typeof value === "string") {
console.log("String:", value.toUpperCase());
} else if (typeof value === "number") {
console.log("Number:", value.toFixed(2));
} else if (typeof value === "boolean") {
console.log("Boolean:", value ? "TRUE" : "FALSE");
} else {
console.log("Other type:", value);
}
}

<-------usecase------>

logValue("hello"); // String: HELLO
logValue(42); // Number: 42.00
logValue(true); // Boolean: TRUE
logValue({ key: 1 }); // Other type: [object Object]

আর never টাইপ হচ্ছে যেটা কখনওই return করবে না।

function fail(message: string): never {
throw new Error(message);
}
