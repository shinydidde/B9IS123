// Sample data for equipment
const equipmentData = [
  {

    id: 1,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Foldable", "LCD Display", "Heart Rate Monitor"],
    name: "Treadmill",
    price: "€999",
    rating: 4.5,
    details: "Introducing our top-of-the-line treadmill, designed to take your cardio workouts to the next level. Engineered with precision and built for performance, our treadmill combines cutting-edge technology with durability to provide you with a superior fitness experience.<br><br>Experience the ultimate in home fitness with our treadmill. Whether you're a beginner or a seasoned athlete, our treadmill is designed to help you reach your fitness goals and take your workouts to new heights. Invest in your health and elevate your fitness routine with our premium treadmill today!",
    image: "https://m.media-amazon.com/images/I/61zr83gTyXL._AC_UY436_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61zr83gTyXL._AC_UY436_QL65_.jpg", "https://m.media-amazon.com/images/I/61zr83gTyXL._AC_UY436_QL65_.jpg", "https://m.media-amazon.com/images/I/61zr83gTyXL._AC_UY436_QL65_.jpg"]
  },
  {
    id: 2,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Rubber Coated", "Various Weights", "Hexagonal Design"],
    name: "Dumbbells",
    price: "€49",
    rating: 4.0,
    details: "Discover the versatility and effectiveness of our premium dumbbells, designed to sculpt and strengthen your muscles from the comfort of your own home. Crafted with precision and built for durability, our dumbbells are the perfect addition to any home gym setup.<br><br>Experience the convenience and effectiveness of our premium dumbbells. Whether you're looking to build muscle, increase strength, or improve overall fitness, our dumbbells are designed to help you achieve your goals efficiently and effectively. Elevate your home workouts and unleash your full potential with our high-quality dumbbells today!",
    image: "https://m.media-amazon.com/images/I/51cWHcHUBAL._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/51cWHcHUBAL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/51cWHcHUBAL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/51cWHcHUBAL._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 3,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Adjustable Seat", "LCD Display", "Resistance Levels"],
    name: "Exercise Bike",
    price: "€799",
    rating: 4.2,
    details: "Introducing our state-of-the-art exercise bike, designed to provide you with a convenient and effective way to improve your cardiovascular health and enhance your fitness level. With its sleek design and advanced features, our exercise bike offers a superior workout experience right in the comfort of your own home.<br><br>Experience the convenience and benefits of our exercise bike. Whether you're looking to improve cardiovascular health, burn calories, or increase endurance, our exercise bike offers a convenient and effective solution for achieving your fitness goals from the comfort of your own home. Elevate your workouts and transform your fitness routine with our advanced exercise bike today!",
    image: "https://m.media-amazon.com/images/I/61CjIIL2QrL._AC_UY436_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61CjIIL2QrL._AC_UY436_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61CjIIL2QrL._AC_UY436_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61CjIIL2QrL._AC_UY436_FMwebp_QL65_.jpg"]
  },
  {
    id: 4,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Foldable Slide Rail", "16 Adjustable Resistance", "An integrated functional LED"],
    name: "Rowing Machine",
    price: "€899",
    rating: 4.4,
    details: "Introducing our premium rowing machine, designed to deliver a full-body workout and provide users with an effective and efficient way to improve cardiovascular health, build strength, and enhance overall fitness. With its sleek design and advanced features, our rowing machine offers a superior workout experience suitable for users of all fitness levels.<br><br>Experience the power and versatility of our rowing machine. Whether you're looking to improve endurance, build strength, or burn calories, our rowing machine offers a convenient and effective solution for achieving your fitness goals from the comfort of your own home. Elevate your workouts and transform your fitness routine with our advanced rowing machine today!",
    image: "https://m.media-amazon.com/images/I/71YwfKwZwoL._AC_UY436_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/71YwfKwZwoL._AC_UY436_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/71YwfKwZwoL._AC_UY436_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/71YwfKwZwoL._AC_UY436_FMwebp_QL65_.jpg"]
  },
  {
    id: 5,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Adjustable Backrest", "Leg Developer", "Preacher Curl Pad"],
    name: "Weight Bench",
    price: "€149",
    rating: 4.1,
    details: "Introducing our versatile and durable weight bench, designed to provide users with a stable and comfortable platform for a wide range of strength training exercises. Whether you're a beginner or an experienced lifter, our weight bench offers the support and functionality you need to achieve your fitness goals effectively.<br><br>Experience the convenience and versatility of our weight bench. Whether you're looking to build muscle, increase strength, or improve overall fitness, our weight bench offers a reliable and effective solution for achieving your fitness goals from the comfort of your own home. Elevate your workouts and unleash your full potential with our premium weight bench today!",
    image: "https://m.media-amazon.com/images/I/51R9XzvpCNL._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/51R9XzvpCNL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/51R9XzvpCNL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/51R9XzvpCNL._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 6,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Adjustable Stride Length", "LCD Display", "Heart Rate Monitor"],
    name: "Elliptical Trainer",
    price: "€1199",
    rating: 4.3,
    details: "Introducing our cutting-edge elliptical trainer, engineered to provide users with a low-impact yet highly effective cardiovascular workout that targets multiple muscle groups simultaneously. Designed with innovation and performance in mind, our elliptical trainer offers a smooth and fluid motion that mimics the natural stride of walking, jogging, or running without putting undue stress on your joints.<br><br>Experience the benefits of our elliptical trainer and transform your fitness routine. Whether you're looking to improve cardiovascular health, burn calories, or tone muscles, our elliptical trainer offers a low-impact and effective solution for achieving your fitness goals from the comfort of your own home. Elevate your workouts and take your fitness to the next level with our premium elliptical trainer today!",
    image: "https://m.media-amazon.com/images/I/51caun6j2UL._AC_UY436_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/51caun6j2UL._AC_UY436_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/51caun6j2UL._AC_UY436_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/51caun6j2UL._AC_UY436_FMwebp_QL65_.jpg"]
  },
  {
    id: 7,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Cast Iron Construction", "Wide Handle Grip"],
    name: "Kettlebells",
    price: "€29",
    rating: 4.0,
    details: "Introducing our versatile and dynamic kettlebells, designed to provide users with a comprehensive and effective full-body workout. Crafted with precision and durability in mind, our kettlebells offer a unique combination of strength, endurance, and flexibility training that targets multiple muscle groups simultaneously.<br><br>Experience the versatility and effectiveness of our kettlebells. Whether you're looking to build muscle, burn fat, or improve overall fitness, our kettlebells offer a convenient and efficient solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium kettlebells today!",
    image: "https://m.media-amazon.com/images/I/61MEhA67aGL._AC_UL640_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61MEhA67aGL._AC_UL640_QL65_.jpg", "https://m.media-amazon.com/images/I/61MEhA67aGL._AC_UL640_QL65_.jpg", "https://m.media-amazon.com/images/I/61MEhA67aGL._AC_UL640_QL65_.jpg"]
  },
  {
    id: 8,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Various Resistance Levels", "Portable and Lightweight"],
    name: "Resistance Bands",
    price: "€19",
    rating: 3.8,
    details: "Introducing our versatile and portable resistance bands, designed to provide users with a convenient and effective way to enhance strength, flexibility, and mobility. Crafted with high-quality materials and innovative design, our resistance bands offer a wide range of resistance levels and exercise possibilities to suit users of all fitness levels and goals.<br><br>Experience the versatility and effectiveness of our resistance bands. Whether you're looking to build muscle, increase flexibility, rehabilitate injuries, or improve overall fitness, our bands offer a convenient and efficient solution for achieving your fitness goals. Elevate your workouts and unlock your full potential with our premium resistance bands today!",
    image: "https://m.media-amazon.com/images/I/71N9KTJS+JL._AC_UL640_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/71N9KTJS+JL._AC_UL640_QL65_.jpg", "https://m.media-amazon.com/images/I/71N9KTJS+JL._AC_UL640_QL65_.jpg", "https://m.media-amazon.com/images/I/71N9KTJS+JL._AC_UL640_QL65_.jpg"]
  },
  {
    id: 9,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Multiple Grip Positions", "Heavy Duty Steel Construction"],
    name: "Pull-Up Bar",
    price: "€39",
    rating: 4.2,
    details: "Introducing our sturdy and versatile pull-up bar, designed to provide users with an effective upper body workout that targets multiple muscle groups including the back, arms, and shoulders. Crafted with durability and functionality in mind, our pull-up bar offers a convenient and space-saving solution for home workouts.<br><br>Experience the benefits of our pull-up bar and take your upper body workouts to the next level. Whether you're looking to build muscle, increase strength, or improve overall fitness, our pull-up bar offers a convenient and efficient solution for achieving your fitness goals from the comfort of your own home. Elevate your workouts and unleash your full potential with our premium pull-up bar today!",
    image: "https://m.media-amazon.com/images/I/61WKRVxtt3L._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61WKRVxtt3L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61WKRVxtt3L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61WKRVxtt3L._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 10,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Adjustable Length", "Lightweight and Durable"],
    name: "Jump Rope",
    price: "€9",
    rating: 3.9,
    details: "Introducing our high-quality jump rope, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/61l0RObaK+L._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61l0RObaK+L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61l0RObaK+L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61l0RObaK+L._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 11,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Adjustable Straps", "Heavy Duty Buckles"],
    name: "Suspension Trainer",
    price: "€69",
    rating: 4.4,
    details: "Introducing our high-quality Suspension Trainer, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/61ar2zPq74L._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61ar2zPq74L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61ar2zPq74L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61ar2zPq74L._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 12,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Ergonomic Design", "Non-slip Base"],
    name: "Push-Up Bars",
    price: "€19",
    rating: 4.1,
    details: "Introducing our high-quality Push-Up Bars, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/716tZEcfJmL._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/716tZEcfJmL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/716tZEcfJmL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/716tZEcfJmL._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 13,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Anti-burst Design", "Includes Pump"],
    name: "Exercise Ball",
    price: "€19",
    rating: 4.0,
    details: "Introducing our high-quality Exercise Ball, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/61kJwIxyzOL._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61kJwIxyzOL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61kJwIxyzOL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61kJwIxyzOL._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 14,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Dense EVA Foam", "Textured Surface"],
    name: "Foam Roller",
    price: "€29",
    rating: 4.2,
    details: "Introducing our high-quality Foam Roller, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/61xk042HX7L._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61xk042HX7L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61xk042HX7L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61xk042HX7L._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 15,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["High-Quality Leather", "Hook-and-loop Closure"],
    name: "Boxing Gloves",
    price: "€69",
    rating: 4.3,
    details: "Introducing our high-quality Boxing Gloves, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/81E4XxN3S1L._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/81E4XxN3S1L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/81E4XxN3S1L._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/81E4XxN3S1L._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 16,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Heavy Duty Vinyl Cover", "Chain and Swivel Included"],
    name: "Punching Bag",
    price: "€149",
    rating: 4.5,
    details: "Introducing our high-quality Punching Bag, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/71pp5mkhxiL._AC_UL640_FMwebp_QL65_T1F_.jpg",
    images: ["https://m.media-amazon.com/images/I/71pp5mkhxiL._AC_UL640_FMwebp_QL65_T1F_.jpg", "https://m.media-amazon.com/images/I/71pp5mkhxiL._AC_UL640_FMwebp_QL65_T1F_.jpg", "https://m.media-amazon.com/images/I/71pp5mkhxiL._AC_UL640_FMwebp_QL65_T1F_.jpg"]
  },
  {
    id: 17,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Non-slip Surface", "Easy to Clean"],
    name: "Exercise Mat",
    price: "€29",
    rating: 4.1,
    details: "Introducing our high-quality Exercise Mat, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/81gPFfFp9mL._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/81gPFfFp9mL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/81gPFfFp9mL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/81gPFfFp9mL._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 18,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Textured Grip", "Available in Various Weights"],
    name: "Medicine Ball",
    price: "€39",
    rating: 4.2,
    details: "Introducing our high-quality Medicine Ball, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/61ArA+NvEQL._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61ArA+NvEQL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61ArA+NvEQL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61ArA+NvEQL._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 19,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["High-Density Foam", "Lightweight and Portable"],
    name: "Yoga Block",
    price: "€12",
    rating: 4.1,
    details: "Introducing our high-quality Yoga Block, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/81ZfhkFzHXL._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/81ZfhkFzHXL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/81ZfhkFzHXL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/81ZfhkFzHXL._AC_UL640_FMwebp_QL65_.jpg"]
  },
  {
    id: 20,
    video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    features: ["Various Weights", "Chrome Finish", "Non-slip Grip"],
    name: "Barbell Set",
    price: "€199",
    rating: 4.6,
    details: "Introducing our high-quality Barbell Set, designed to provide users with a versatile and effective way to improve cardiovascular health, endurance, agility, and coordination. Crafted with precision and durability in mind, our jump rope offers a convenient and portable workout solution suitable for users of all fitness levels.<br><br>Experience the benefits of our jump rope and take your fitness routine to the next level. Whether you're looking to improve cardiovascular health, increase agility, or enhance coordination, our jump rope offers a convenient and effective solution for achieving your fitness goals. Elevate your workouts and unleash your full potential with our premium jump rope today!",
    image: "https://m.media-amazon.com/images/I/61Oc2mUzrwL._AC_UL640_FMwebp_QL65_.jpg",
    images: ["https://m.media-amazon.com/images/I/61Oc2mUzrwL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61Oc2mUzrwL._AC_UL640_FMwebp_QL65_.jpg", "https://m.media-amazon.com/images/I/61Oc2mUzrwL._AC_UL640_FMwebp_QL65_.jpg"]
  }

];

// Function to display equipment
function displayEquipment() {
  const equipmentList = document.getElementById("equipmentList");
  equipmentData.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("col-md-3");
    itemDiv.classList.add("col-sm-6");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
                <a href="item.html?id=${item.id}">
                  <div class="card mb-4">
                    <div class="card-body"><img class="img-fluid mx-auto d-block" src="${item.image}" /></div>
                    <div class="card-footer">${item.name} - ${item.price}</div>
                  </div>
                </a>
            `;
    equipmentList.appendChild(itemDiv);
  });
}

// Function to display equipment details
function displayEquipmentDetails(data) {
  const equipmentDetails = document.getElementById("item");
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("row");
  itemDiv.innerHTML = `
            <div class="col-md-6 text-center">
              <div class="card mt-4">
                  <div class="card-body">
                    <div id="demo" class="carousel slide" data-bs-ride="carousel">
                      <!-- Indicators/dots -->
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                      </div>
                      <!-- The slideshow/carousel -->
                      <div class="carousel-inner" id="carousel">
                      <!-- dynamically adding the images below -->
                      </div>
                      <!-- Left and right controls/icons -->
                      <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-md-6 mt-4">
                <h2>${data.name} - ${data.price} <button type="button" class="btn btn-dark btn-sm float-end" data-bs-toggle="modal" data-bs-target="#reservationForm">Reserve Item</button></h2>
                <p class="mb-2 text-muted" id="features"><small> Rating - <b>${data.rating}</b> </small></p>
                <p>${data.details}</p>
                <div class="mt-4">
                  <video width="100%" controls autoplay muted>
                    <source src="${data.video}" type="video/mp4">
                    Your browser does not support HTML video.
                  </video>
                </div>
              </div>
            </div>
            `;
  equipmentDetails.appendChild(itemDiv);

  // looping features in inner html for badges
  featuresDiv = document.getElementById("features");
  data.features.forEach((feature) => {
    const badge = document.createElement("span");
    badge.classList.add("badge");
    badge.classList.add("bg-secondary");
    badge.classList.add("me-1");
    badge.innerHTML = `${feature}`;
    featuresDiv.appendChild(badge);
  });

  // looping images in inner html for carousel
  carouselDiv = document.getElementById("carousel");
  data.images.forEach((img, index) => {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("carousel-item");
    if (index == 0) {
      imgDiv.classList.add("active");
    }
    imgDiv.innerHTML = `<img class="img-fluid" src="${img}" class="d-block w-100">`;
    carouselDiv.appendChild(imgDiv);
  });

  // Reservation form submission
  document.getElementById("reservation-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    var myModal = document.getElementById('reservationForm');
    var modal = bootstrap.Modal.getInstance(myModal)
    // const email = document.getElementById("email").value;
    alert(`Thank you, ${name}! Your reservation has been received for ${data.name}.`);
    // hiding the modal after submit
    document.getElementById("reservation-form").reset();
    modal.hide();
  });
}

//function for fetching it's details when the item is clicked with url param
function search(id, data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
}

// getting the id of the selected item from url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// Document ready function
$(document).ready(function () {
  //this should only run in the home page
  if (!id) {
    displayEquipment();
    // Search filter for search bar
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#equipment .item").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  } else {
    {
      //should only run in the item page
      const data = search(id, equipmentData);
      displayEquipmentDetails(data);
    }
  }
});
