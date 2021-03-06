const users = [
  {
    id: "1",
    firstName: "Veda",
    lastName: "Mitra",
    email: "myemail@mycompany.com",
  },
];

const claims = [
  {
    id: 1,
    user: {
      id: "1",
      firstName: "Veda",
      lastName: "Mitra",
      email: "myemail@mycompany.com",
    },
    claim: {
      id: 1,
      policyNumber: "0001",
      eventDate: "",
      description: "Covid19 Pandemic",
    },
  },
  {
    id: 2,
    user: {
      id: "1",
      firstName: "Veda",
      lastName: "Mitra",
      email: "myemail@mycompany.com",
    },
    claim: {
      id: 1,
      policyNumber: "0001",
      eventDate: "",
      description: "Covid19 Pandemic",
    },
  },
  {
    user: {
      id: "2",
      firstName: "Test",
      lastName: "User1",
      email: "myemail2@mycompany.com",
    },
    claim: {
      id: 1,
      policyNumber: "0002",
      eventDate: "",
      description: "Covid19 Pandemic",
    },
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  users,
  claims,
};
