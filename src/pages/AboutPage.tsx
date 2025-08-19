import React from 'react';
import { Award, Users, Heart, Leaf, Star, CheckCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarah founded Jelai with a passion for creating premium jellies using traditional family recipes.'
    },
    {
      name: 'Michael Chen',
      role: 'Head Chef',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 15 years of culinary experience, Michael ensures every batch meets our high-quality standards.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Quality Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emily oversees our quality control processes and ensures food safety compliance.'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Made with Love',
      description: 'Every jar is crafted with care and attention to detail, using time-honored recipes.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: 'Natural Ingredients',
      description: 'We source only the finest, natural ingredients from trusted local suppliers.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Premium Quality',
      description: 'Our commitment to excellence has earned us recognition and loyal customers.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Community Focus',
      description: 'We believe in supporting our local community and sustainable practices.'
    }
  ];

  const achievements = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50+', label: 'Unique Flavors' },
    { number: '5', label: 'Years of Excellence' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Jelai</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the story behind our premium jellies and our commitment to bringing 
              you the finest flavors crafted with love and tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, Jelai began as a small family business with a simple mission: 
                  to create the most delicious and highest quality jellies using traditional recipes 
                  passed down through generations.
                </p>
                <p>
                  What started in a small kitchen has grown into a beloved brand trusted by thousands 
                  of customers across the country. Our commitment to using only the finest natural 
                  ingredients and time-honored techniques remains unchanged.
                </p>
                <p>
                  Today, we continue to innovate while staying true to our roots, creating new flavors 
                  and experiences that bring joy to every moment. Each jar of Jelai represents our 
                  dedication to quality, tradition, and the sweet moments that make life special.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jelai production"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <div>
                    <div className="font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-500">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from sourcing ingredients to 
              delivering the final product to your doorstep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              We're proud of what we've accomplished and the trust our customers have placed in us.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-green-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Jelai who work tirelessly to bring you 
              the best jellies possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Quality Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From farm to jar, we maintain the highest standards at every step of our process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sourcing</h3>
              <p className="text-gray-600 text-sm">
                We carefully select the finest fruits from trusted local farmers and suppliers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600 text-sm">
                Our expert chefs prepare each batch using traditional methods and recipes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Control</h3>
              <p className="text-gray-600 text-sm">
                Every batch undergoes rigorous testing to ensure it meets our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Packaging</h3>
              <p className="text-gray-600 text-sm">
                Products are carefully packaged to preserve freshness and quality during shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality has been recognized by industry leaders and certification bodies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">FDA Approved</h3>
              <p className="text-gray-600 text-sm">
                All our products meet FDA safety and quality standards.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Artisan Jelly 2023</h3>
              <p className="text-gray-600 text-sm">
                Awarded by the National Food & Beverage Association.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic Certified</h3>
              <p className="text-gray-600 text-sm">
                Many of our products are certified organic by USDA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};