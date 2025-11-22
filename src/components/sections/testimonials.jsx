import React from 'react'

export const Testimonials = () => {
  const testimonials = [
    { name: 'Peter Mwangi', role: 'Manager', quote: 'Great selection and amazing customer service!' },
    { name: 'John K.', role: 'Buyer', quote: 'Quality products at unbeatable prices.' },
    { name: 'Lynn .A. S.', role: 'Test driver', quote: 'I find best car experience that my clients love.' },
  ]

  return (
   <section>
  <div class="flex flex-col md:flex-row justify-center items-center h-screen">
  <div class="md:w-1/2 p-8">
    <h1 class="text-3xl font-bold mb-4">What People Are Saying About Us</h1>
    <div class="flex items-center mb-4">
      <img src="https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg" alt="Josh Smith" class="rounded-full mr-4 w-[100px]" />
      <div>
        <h2 class="text-lg font-bold">Jane Smith</h2>
        <p class="text-gray-500">Manager of The New York Times</p>
      </div>
    </div>
    <p class="text-gray-700">"They are have a perfect touch for make something so professional, interest and useful for a lot of people."</p>
  </div>
  <div class="md:w-1/2 p-8">
    <img src="https://i.pinimg.com/1200x/ef/8d/65/ef8d65dc55007bd5dde881085e8d274e.jpg" alt="Living Room" class="w-full h-auto" />
  </div>
</div>
</section>
  )
}

export default Testimonials
