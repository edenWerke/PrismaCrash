import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "jhon",
    email: "jhon@prisma.com",
    post: {
      create: [
        {
          title: "Join the Prisma Slack",
          published: true,
          catagories: {
            create: [
              { name: "furniture" },
              { name: "fashion" },
            ],
          },
        },
      ],
    },
  },
    {
    name: "jhon22",
    email: "jhon22@prisma.com",
    post: {
      create: [
        {
          title: "Join the ssPrisma Slack",
          published: true,
          catagories: {
            create: [
              { name: "furniture" },
              { name: "fashion" },
            ],
          },
        },
      ],
    },
  },
  {
    name: "jack",
    email: "jack@prisma.io",
    post: {
      create: [
        {
          title: "Follow P'''''''''''''''''''''''''''''risma",
          published: true,
          catagories: {
            connect: [{ id: 1 }], // Connect to existing category ID
          },
        },
      ],
    },
  },
  {
    name: "emma",
    email: "emma@prisma.com",
    post: {
      create: [
        {
          title: "Learn Prisma ORM",
          published: false,
          catagories: {
            connect: [{ id: 2 }], // Connect to existing category ID
          },
        },
      ],
    },
  },
];

async function main() {
  console.log("Start seeding");

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log("Seeding finished");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
