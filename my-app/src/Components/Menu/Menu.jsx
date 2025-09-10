import React, { useState, useEffect } from 'react';
import '../Menu/Menu.css';

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuItems, setMenuItems] = useState([]);
  const [popularDishes, setPopularDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate API call to fetch menu data
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        // In a real application, you would fetch from an actual API endpoint
        // const response = await fetch('https://api.yourrestaurant.com/menu');
        // const data = await response.json();
        
        // Simulating API response with a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock API data
        const mockData = [
          {
            id: 1,
            name: "Margherita Pizza",
            description: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
            price: 12.99,
            category: "pizza",
           
            popular: true
          },
          {
            id: 2,
            name: "Pepperoni Pizza",
            description: "Classic pizza with tomato sauce, mozzarella, and pepperoni",
            price: 14.99,
            category: "pizza",
         
            popular: true
          },
          {
            id: 3,
            name: "Caesar Salad",
            description: "Crisp romaine lettuce with parmesan, croutons, and Caesar dressing",
            price: 8.99,
            category: "salads",
           
          },
          {
            id: 4,
            name: "Tiramisu",
            description: "Italian coffee-flavored dessert with mascarpone and cocoa",
            price: 6.99,
            category: "desserts",
          
            popular: true
          },
          {
            id: 5,
            name: "Grilled Salmon",
            description: "Fresh salmon fillet with lemon butter sauce and seasonal vegetables",
            price: 18.99,
            category: "mains",
        
          },
          {
            id: 6,
            name: "Garlic Bread",
            description: "Toasted bread with garlic butter and herbs",
            price: 4.99,
            category: "starters",
           
          },
          {
            id: 7,
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
            price: 7.99,
            category: "desserts",
           
          },
          {
            id: 8,
            name: "Pasta Carbonara",
            description: "Spaghetti with creamy sauce, pancetta, and parmesan cheese",
            price: 14.99,
            category: "mains",
            
            popular: true
          },
          {
            id: 9,
            name: "Bruschetta",
            description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
            price: 5.99,
            category: "starters",
        
          },
          {
            id: 10,
            name: "Vegetarian Pizza",
            description: "Pizza with mushrooms, bell peppers, onions, and olives",
            price: 13.99,
            category: "pizza",
        
          },
          {
            id: 11,
            name: "BBQ Chicken Pizza",
            description: "Pizza with BBQ sauce, chicken, red onions, and cilantro",
            price: 15.99,
            category: "pizza",
        
          },
          {
            id: 12,
            name: "Cheesecake",
            description: "Creamy cheesecake with berry compote",
            price: 6.49,
            category: "desserts",
        
          }
        ];
        
        setMenuItems(mockData);
        setPopularDishes(mockData.filter(item => item.popular));
        setLoading(false);
      } catch (err) {
        setError('Failed to load menu. Please try again later.');
        setLoading(false);
        console.error('API Error:', err);
      }
    };

    fetchMenuData();
  }, []);

  // Filter items based on search term and active category
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Function to add item to cart (would connect to your cart API)
  const addToCart = async (item) => {
    try {
      // In a real application, you would send to your API
      // await fetch('https://api.yourrestaurant.com/cart', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ itemId: item.id, quantity: 1 })
      // });
      
      console.log('Added to cart:', item);
      alert(`${item.name} added to cart!`);
    } catch (err) {
      console.error('Failed to add to cart:', err);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="menu-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading menu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="menu-page">
        <div className="error-container">
          <h2>Oops!</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="menu-page">
      {/* Header Section */}
      <div className="menu-header">
        <h1>Our Delicious Menu</h1>
        <p>Made with the finest ingredients and prepared with passion</p>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <button 
          className={activeCategory === 'all' ? 'active' : ''} 
          onClick={() => setActiveCategory('all')}
        >
          All Items
        </button>
        <button 
          className={activeCategory === 'pizza' ? 'active' : ''} 
          onClick={() => setActiveCategory('pizza')}
        >
          Pizza
        </button>
        <button 
          className={activeCategory === 'mains' ? 'active' : ''} 
          onClick={() => setActiveCategory('mains')}
        >
          Main Courses
        </button>
        <button 
          className={activeCategory === 'starters' ? 'active' : ''} 
          onClick={() => setActiveCategory('starters')}
        >
          Starters
        </button>
        <button 
          className={activeCategory === 'desserts' ? 'active' : ''} 
          onClick={() => setActiveCategory('desserts')}
        >
          Desserts
        </button>
        <button 
          className={activeCategory === 'salads' ? 'active' : ''} 
          onClick={() => setActiveCategory('salads')}
        >
          Salads
        </button>
      </div>

      {/* Pizza Special Offer Section */}
      <div className="special-offer">
        <div className="offer-content">
          <div className="offer-text">
            <h2>Pizza Special Offer!</h2>
            <p>Buy any 2 large pizzas and get 1 medium pizza <span className="highlight">FREE</span></p>
            <p className="offer-details">Offer valid until the end of the month. Dine-in only.</p>
            <button className="offer-btn">Order Now</button>
          </div>
          <div className="offer-image">
            <div className="pizza-img">🍕</div>
          </div>
        </div>
      </div>

      {/* Popular Dishes Section */}
      <div className="popular-section">
        <h2>Most Popular Dishes</h2>
        <div className="popular-dishes">
          {popularDishes.map(item => (
            <div key={item.id} className="popular-item">
              <div className="popular-image">
                <span className="emoji">{item.image}</span>
              </div>
              <div className="popular-details">
                <h3>{item.name}</h3>
                <p className="popular-desc">{item.description}</p>
                <p className="popular-price">${item.price.toFixed(2)}</p>
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="menu-items">
        <h2>{activeCategory === 'all' ? 'All Menu Items' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}</h2>
        <div className="items-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id} className="menu-item">
                <div className="item-image">
                  <span className="emoji">{item.image}</span>
                </div>
                <div className="item-details">
                  <div className="item-header">
                    <h3>{item.name}</h3>
                    <span className="price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="description">{item.description}</p>
                  <button 
                    className="add-to-cart"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No dishes found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}