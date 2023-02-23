const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "2D" },
    { name: "3D" },
    { name: "Jewelry" },
    { name: "Prints" },
    { name: "Misc" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Untitled Collage #1",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023.",
      image: "image01.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #2",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image02.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #3",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image03.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #4",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image04.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #5",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image05.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #6",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image06.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #7",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image07.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #8",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image08.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #9",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image09.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #10",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image10.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #11",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image11.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #12",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image12.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #13",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image13.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #14",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image14.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Untitled Collage #15",
      description: "Mixed media collage painting by Bobby Gilbreath, 2023",
      image: "image15.jpg",
      category: categories[0]._id,
      price: 150,
      quantity: 30,
    },
    {
      name: "Charcoal Grey Magma Pot",
      category: categories[1]._id,
      description: "Charcoal grey magma vessel by Vincent Stemmler, 2022.",
      image: "image002.jpg",
      price: 50,
      quantity: 30,
    },
    {
      name: "Structured",
      category: categories[1]._id,
      description: "Structured. Ceramic sculpture by Vincent Stemmler, 2020.",
      image: "image001.jpg",
      price: 200,
      quantity: 30,
    },
    {
      name: "Sculpture",
      category: categories[1]._id,
      description: "Mixed media sculpture by Vincent Stemmler, 2022.",
      image: "image003.jpg",
      price: 300,
      quantity: 30,
    },
    {
      name: "Earrings",
      category: categories[2]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex.",
      image: "image0000.jpg",
      price: 75,
      quantity: 30,
    },
    {
      name: "Necklace",
      category: categories[2]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex.",
      image: "image0001.jpg",
      price: 75,
      quantity: 30,
    },
    {
      name: "Necklace #2",
      category: categories[2]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu.",
      image: "image0002.jpg",
      price: 120,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #16",
      description: "Print of Untitled Collage #16 by Bobby Gilbreath, 2023",
      image: "image16.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #17",
      description: "Print of Untitled Collage #17 by Bobby Gilbreath, 2023",
      image: "image17.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #18",
      description: "Print of Untitled Collage #18 by Bobby Gilbreath, 2023",
      image: "image18.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #19",
      description: "Print of Untitled Collage #19 by Bobby Gilbreath, 2023",
      image: "image19.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #20",
      description: "Print of Untitled Collage #20 by Bobby Gilbreath, 2023",
      image: "image20.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #21",
      description: "Print of Untitled Collage #21 by Bobby Gilbreath, 2023",
      image: "image21.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #22",
      description: "Print of Untitled Collage #22 by Bobby Gilbreath, 2023",
      image: "image22.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #23",
      description: "Print of Untitled Collage #23 by Bobby Gilbreath, 2023",
      image: "image23.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #24",
      description: "Print of Untitled Collage #24 by Bobby Gilbreath, 2023",
      image: "image24.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #25",
      description: "Print of Untitled Collage #25 by Bobby Gilbreath, 2023",
      image: "image25.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #26",
      description: "Print of Untitled Collage #26 by Bobby Gilbreath, 2023",
      image: "image26.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #27",
      description: "Print of Untitled Collage #27 by Bobby Gilbreath, 2023",
      image: "image27.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #28",
      description: "Print of Untitled Collage #28 by Bobby Gilbreath, 2023",
      image: "image28.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #29",
      description: "Print of Untitled Collage #29 by Bobby Gilbreath, 2023",
      image: "image29.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #30",
      description: "Print of Untitled Collage #30 by Bobby Gilbreath, 2023",
      image: "image30.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Print of Untitled Collage #31",
      description: "Print of Untitled Collage #31 by Bobby Gilbreath, 2023",
      image: "image31.jpg",
      category: categories[3]._id,
      price: 20,
      quantity: 30,
    },
    {
      name: "Local Publication",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet.",
      image: "image000.jpg",
      price: 9.99,
      quantity: 200,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Bobby",
    lastName: "Gilbreath",
    email: "bobby@email.com",
    password: "password123",
  });

  await User.create({
    firstName: "Vincent",
    lastName: "Stemmler",
    email: "fortnite20@email.com",
    password: "password123",
  });

  console.log("users seeded");

  process.exit();
});
