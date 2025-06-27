import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await hash('admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@lasercraft.com' },
    update: {},
    create: {
      email: 'admin@lasercraft.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // Create sample products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { id: 'custom-design' },
      update: {},
      create: {
        id: 'custom-design',
        name: 'Custom Laser-Cut Design',
        description: 'Upload your own design for custom laser cutting',
        basePrice: 25.00,
        material: 'birch',
        thickness: '1/4',
        maxWidth: 24,
        maxHeight: 24,
        images: ['https://via.placeholder.com/400x400?text=Custom+Design'],
        featured: true,
      },
    }),
    prisma.product.upsert({
      where: { id: 'name-sign' },
      update: {},
      create: {
        id: 'name-sign',
        name: 'Custom Name Sign',
        description: 'Personalized wooden name sign for home or office',
        basePrice: 45.00,
        material: 'oak',
        thickness: '1/2',
        maxWidth: 18,
        maxHeight: 6,
        images: ['https://via.placeholder.com/400x400?text=Name+Sign'],
        featured: true,
      },
    }),
    prisma.product.upsert({
      where: { id: 'wall-art' },
      update: {},
      create: {
        id: 'wall-art',
        name: 'Decorative Wall Art',
        description: 'Intricate geometric patterns for modern spaces',
        basePrice: 65.00,
        material: 'walnut',
        thickness: '3/8',
        maxWidth: 20,
        maxHeight: 20,
        images: ['https://via.placeholder.com/400x400?text=Wall+Art'],
        featured: true,
      },
    }),
    prisma.product.upsert({
      where: { id: 'coasters' },
      update: {},
      create: {
        id: 'coasters',
        name: 'Custom Coaster Set',
        description: 'Set of 4 personalized wooden coasters',
        basePrice: 25.00,
        material: 'maple',
        thickness: '1/4',
        maxWidth: 4,
        maxHeight: 4,
        images: ['https://via.placeholder.com/400x400?text=Coasters'],
        featured: false,
      },
    }),
  ])

  // Create sample customer
  const customerPassword = await hash('customer123', 12)
  const customer = await prisma.user.upsert({
    where: { email: 'customer@example.com' },
    update: {},
    create: {
      email: 'customer@example.com',
      name: 'John Doe',
      password: customerPassword,
      role: 'USER',
    },
  })

  // Create sample order
  const order = await prisma.order.create({
    data: {
      userId: customer.id,
      email: customer.email,
      status: 'PROCESSING',
      subtotal: 45.00,
      tax: 3.60,
      shipping: 15.00,
      total: 63.60,
      shippingAddress: {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345',
        phone: '555-0123',
      },
      billingAddress: {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345',
        phone: '555-0123',
      },
      orderItems: {
        create: [
          {
            productId: products[1].id,
            quantity: 1,
            price: 45.00,
          },
        ],
      },
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log('📧 Admin login: admin@lasercraft.com / admin123')
  console.log('👤 Customer login: customer@example.com / customer123')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })