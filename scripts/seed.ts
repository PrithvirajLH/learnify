const {PrismaClient} = require("@prisma/client");

const database = new PrismaClient();

async function main(){
    try {
        await database.category.createMany({
            data: [
                {name: "Computer Science"},
                {name: "Music"},
                {name: "Fitness"},
                {name: "Photography"},
                {name: "Engineering"},
                {name: "Filming"},
                {name: "Accounting"}
            ]
        });

        console.log("Success")
        
    } catch (error) {
        console.log("Error sending the database categories", error);
    } finally {
        await database.$disconnect
    }
}

main()