const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message
      }
    });

    res.redirect('/?success=true');
  } catch (error) {
    console.error('Error al crear contacto:', error);
    res.redirect('/?error=true');
  }
};

module.exports = {
  createContact
}; 