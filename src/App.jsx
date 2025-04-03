import  { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded font-semibold transition duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl shadow bg-white ${className}`}>{children}</div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export default function App() {
  const allServices = [
  { name: "Dog Walking", category: "Premium Services", icon: "🐕‍🦺", description: "Daily strolls or energetic jogs to keep your furry friend happy and healthy.", badge: "Paid" },
  { name: "Grooming", category: "Premium Services", icon: "🛁", description: "Give your pet a spa day with our expert grooming services that ensure cleanliness and comfort.", badge: "Paid" },
  { name: "Training", category: "Premium Services", icon: "🎓", description: "Transform your pet into a well-mannered companion with positive reinforcement and loving discipline.", badge: "Paid" },
  { name: "Vet on Call", category: "Premium Services", icon: "🩺", description: "Instant medical advice and emergency vet access right at your fingertips, anytime.", badge: "Paid" },
  { name: "Pet Supplies", category: "Premium Services", icon: "🛍️", description: "Curated essentials and accessories delivered to your door — because your pet deserves the best.", badge: "Paid" },
  { name: "Dog Sitting", category: "Premium Services", icon: "🏠", description: "Trustworthy sitters to keep your furry one loved and safe while you're away.", badge: "Paid" },
  { name: "Birthday Planning", category: "Premium Services", icon: "🎉", description: "Celebrate your pet’s big day with custom themes, cakes, and furry guest invites!", badge: "Paid" },
  { name: "Travel Help for Pets", category: "Premium Services", icon: "✈️", description: "Make travel stress-free for your pet with assistance for flights, road trips, and more.", badge: "Paid" },
  { name: "Pick & Drop for Grooming / Vet", category: "Premium Services", icon: "🚗", description: "Convenient transportation so your pet can get pampered or treated without you lifting a paw.", badge: "Paid" },
  { name: "Regular Medicines", category: "Premium Services", icon: "💊", description: "Scheduled delivery of prescribed meds and supplements for uninterrupted care.", badge: "Paid" },
  { name: "Adopt / Foster", category: "Compassionate Care", icon: "🐾", description: "Find your new best friend or offer a loving home — every pawprint matters.", badge: "Free" },
  { name: "Help Lines for Dog Bites", category: "Compassionate Care", icon: "📞", description: "Emergency helplines and guidance in the event of dog bites or related incidents.", badge: "Free" },
  { name: "Help Lines for Neutering / Spaying", category: "Compassionate Care", icon: "⚕️", description: "Access guidance and book safe, ethical sterilization procedures for your pets.", badge: "Free" },
  { name: "Behavioural Understanding", category: "Compassionate Care", icon: "🧠", description: "Decode your pet’s emotions and behaviors with expert insights and support.", badge: "Free" },
  { name: "Pet Blogs", category: "Pet Parent Resources", icon: "📝", description: "Curated reads to guide, inspire and entertain every pet parent.", badge: "Free" },
  { name: "Mental Health Benefits", category: "Pet Parent Resources", icon: "🧘‍♀️", description: "Learn how pets uplift our emotional well-being and create meaningful routines.", badge: "Free" },
  { name: "Food Needs", category: "Pet Parent Resources", icon: "🍖", description: "Understand your pet’s dietary needs to promote optimal growth and energy.", badge: "Free" },
  { name: "First-time Pet Parent Guide", category: "Pet Parent Resources", icon: "📚", description: "Everything new pet parents need to know — from sleep to playtime and love.", badge: "Free" },
  { name: "Home Food Recipes", category: "Pet Parent Resources", icon: "🍲", description: "Nutritious, vet-approved home recipes your pets will drool over.", badge: "Free" }
];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["All", ...new Set(allServices.map(service => service.category))];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen text-gray-800 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-center bg-cover z-0" style={{ backgroundImage: "url('/dog-bg.jpg')" }}></div>
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-0"></div>
      <div className="relative z-10">
        <header className="p-6 flex flex-col sm:flex-row justify-between items-center shadow-sm bg-white/90 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <img src="/dog-bg.jpg" alt="Marley Dog" className="w-12 h-12 rounded-full object-cover" />
            <h1 className="text-3xl font-bold tracking-tight text-amber-700">Marley & Me</h1>
          </div>
        </header>

        <main className="py-20 px-6 max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold text-amber-800 mb-6"
          >
            All Your Pet's Needs in One Whimsical App
          </motion.h2>

          <img src="https://i.imgur.com/JFawQNC.png" alt="Marley & Me Canva Image" className="mx-auto my-6 w-full h-auto rounded-xl shadow-lg object-cover transition duration-500 hover:scale-105" style={{ maxWidth: '100%', height: 'auto' }} />

          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            From tail-wagging spa days to cuddly overnight care, everything you and your pet need is just a tap away.
          </p>

          <Button className="text-lg px-8 py-6 rounded-3xl shadow-md bg-pink-500 hover:bg-pink-600 text-white">Download Now</Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, i) => (
              <Button
                key={i}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white border-pink-500'
                    : 'bg-white text-gray-700 border-gray-300'
                } shadow transition-transform hover:scale-105`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <div className="my-10 flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, i) => {
              const pastelColors = [
                'bg-pink-100', 'bg-purple-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-rose-100'
              ];
              const sizeVariants = ['h-60'];
              const color = pastelColors[i % pastelColors.length];
              const height = sizeVariants[i % sizeVariants.length];
              return (
                <Card key={i} className="bg-white h-60 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:rotate-1">
                  <CardContent>
                    <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-125">{service.icon}</div>
                    <h3 className="text-lg font-bold text-rose-600 flex items-center justify-between">
                      {service.name}
                      {service.badge && (
                        <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                          service.badge === 'Free' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {service.badge}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-700 mt-2">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </main>

        <footer className="bg-white/90 backdrop-blur-sm py-6 mt-16 shadow-inner">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
            <p className="text-gray-600">&copy; 2025 Marley & Me. All rights reserved.</p>
            <nav className="space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-800 hover:text-gray-600">Privacy Policy</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Terms of Service</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact Us</a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}



