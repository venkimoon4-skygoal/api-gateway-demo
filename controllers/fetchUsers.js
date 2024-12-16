const users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobileNumber: "+1234567890",
    kycDetails: {
      aadharCardDoc: "1234-5678-9101",
      panCardDoc: "ABCDE1234F",
      documents: ["document1.pdf", "document2.pdf"],
    },
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    mobileNumber: "+0987654321",
    kycDetails: {
      aadharCardDoc: "2345-6789-0123",
      panCardDoc: "FGHIJ5678K",
      documents: ["document3.pdf", "document4.pdf"],
    },
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    mobileNumber: "+1122334455",
    kycDetails: {
      aadharCardDoc: "3456-7890-1234",
      panCardDoc: "KLMNO9876P",
      documents: ["document5.pdf", "document6.pdf"],
    },
  },
  {
    firstName: "Bob",
    lastName: "Williams",
    email: "bob.williams@example.com",
    mobileNumber: "+5566778899",
    kycDetails: {
      aadharCardDoc: "4567-8901-2345",
      panCardDoc: "PQRST5432U",
      documents: ["document7.pdf", "document8.pdf"],
    },
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    mobileNumber: "+6677889900",
    kycDetails: {
      aadharCardDoc: "5678-9012-3456",
      panCardDoc: "VWXYZ8765A",
      documents: ["document9.pdf", "document10.pdf"],
    },
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    mobileNumber: "+7788990011",
    kycDetails: {
      aadharCardDoc: "6789-0123-4567",
      panCardDoc: "ABCDE4321B",
      documents: ["document11.pdf", "document12.pdf"],
    },
  },
  {
    firstName: "Sophia",
    lastName: "Martinez",
    email: "sophia.martinez@example.com",
    mobileNumber: "+8899001122",
    kycDetails: {
      aadharCardDoc: "7890-1234-5678",
      panCardDoc: "FGHIJ3210C",
      documents: ["document13.pdf", "document14.pdf"],
    },
  },
  {
    firstName: "Liam",
    lastName: "Garcia",
    email: "liam.garcia@example.com",
    mobileNumber: "+9900112233",
    kycDetails: {
      aadharCardDoc: "8901-2345-6789",
      panCardDoc: "KLMNO2109D",
      documents: ["document15.pdf", "document16.pdf"],
    },
  },
  {
    firstName: "Isabella",
    lastName: "Rodriguez",
    email: "isabella.rodriguez@example.com",
    mobileNumber: "+0011223344",
    kycDetails: {
      aadharCardDoc: "9012-3456-7890",
      panCardDoc: "PQRST1098E",
      documents: ["document17.pdf", "document18.pdf"],
    },
  },
  {
    firstName: "Noah",
    lastName: "Hernandez",
    email: "noah.hernandez@example.com",
    mobileNumber: "+2233445566",
    kycDetails: {
      aadharCardDoc: "0123-4567-8901",
      panCardDoc: "VWXYZ0987F",
      documents: ["document19.pdf", "document20.pdf"],
    },
  },
];

const fetchUser = async (req, res) => {
  try {
    if (users.length === 0) {
      return res.status(400).json({ message: "users data is empty" });
    }

    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = fetchUser;
