const hyunjun = {
    name: "Jeonhyunjun",
    age: 28,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => hyunjun
    }
}

export default resolvers;