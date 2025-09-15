// import React, { useState, useEffect } from 'react';
// import '../Menu/Menu.css';

// export default function Menu() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [menuItems, setMenuItems] = useState([]);
//   const [popularDishes, setPopularDishes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Simulate API call to fetch menu data
//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         setLoading(true);
//         // In a real application, you would fetch from an actual API endpoint
//         // const response = await fetch('https://api.yourrestaurant.com/menu');
//         // const data = await response.json();
        
//         // Simulating API response with a delay
//         await new Promise(resolve => setTimeout(resolve, 1000));
        
//         // Mock API data
//         const mockData = [
//           {
//             id: 1,
//             name: "Margherita Pizza",
//             description: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
//             price: 12.99,
//             category: "pizza",
           
//             popular: true
//           },
//           {
//             id: 2,
//             name: "Pepperoni Pizza",
//             description: "Classic pizza with tomato sauce, mozzarella, and pepperoni",
//             price: 14.99,
//             category: "pizza",
         
//             popular: true
//           },
//           {
//             id: 3,
//             name: "Caesar Salad",
//             description: "Crisp romaine lettuce with parmesan, croutons, and Caesar dressing",
//             price: 8.99,
//             category: "salads",
           
//           },
//           {
//             id: 4,
//             name: "Tiramisu",
//             description: "Italian coffee-flavored dessert with mascarpone and cocoa",
//             price: 6.99,
//             category: "desserts",
          
//             popular: true
//           },
//           {
//             id: 5,
//             name: "Grilled Salmon",
//             description: "Fresh salmon fillet with lemon butter sauce and seasonal vegetables",
//             price: 18.99,
//             category: "mains",
        
//           },
//           {
//             id: 6,
//             name: "Garlic Bread",
//             description: "Toasted bread with garlic butter and herbs",
//             price: 4.99,
//             category: "starters",
           
//           },
//           {
//             id: 7,
//             name: "Chocolate Lava Cake",
//             description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
//             price: 7.99,
//             category: "desserts",
           
//           },
//           {
//             id: 8,
//             name: "Pasta Carbonara",
//             description: "Spaghetti with creamy sauce, pancetta, and parmesan cheese",
//             price: 14.99,
//             category: "mains",
            
//             popular: true
//           },
//           {
//             id: 9,
//             name: "Bruschetta",
//             description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
//             price: 5.99,
//             category: "starters",
        
//           },
//           {
//             id: 10,
//             name: "Vegetarian Pizza",
//             description: "Pizza with mushrooms, bell peppers, onions, and olives",
//             price: 13.99,
//             category: "pizza",
        
//           },
//           {
//             id: 11,
//             name: "BBQ Chicken Pizza",
//             description: "Pizza with BBQ sauce, chicken, red onions, and cilantro",
//             price: 15.99,
//             category: "pizza",
        
//           },
//           {
//             id: 12,
//             name: "Cheesecake",
//             description: "Creamy cheesecake with berry compote",
//             price: 6.49,
//             category: "desserts",
        
//           }
//         ];
        
//         setMenuItems(mockData);
//         setPopularDishes(mockData.filter(item => item.popular));
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load menu. Please try again later.');
//         setLoading(false);
//         console.error('API Error:', err);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   // Filter items based on search term and active category
//   const filteredItems = menuItems.filter(item => {
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
//     return matchesSearch && matchesCategory;
//   });

//   // Function to add item to cart (would connect to your cart API)
//   const addToCart = async (item) => {
//     try {
//       // In a real application, you would send to your API
//       // await fetch('https://api.yourrestaurant.com/cart', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify({ itemId: item.id, quantity: 1 })
//       // });
      
//       console.log('Added to cart:', item);
//       alert(`${item.name} added to cart!`);
//     } catch (err) {
//       console.error('Failed to add to cart:', err);
//       alert('Failed to add item to cart. Please try again.');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="menu-page">
//         <div className="loading-container">
//           <div className="loading-spinner"></div>
//           <p>Loading menu...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="menu-page">
//         <div className="error-container">
//           <h2>Oops!</h2>
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()} className="retry-btn">
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="menu-page">
//       {/* Header Section */}
//       <div className="menu-header">
//         <h1>Our Delicious Menu</h1>
//         <p>Made with the finest ingredients and prepared with passion</p>
//       </div>

//       {/* Search Bar */}
//       <div className="search-container">
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search for dishes..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="search-btn">
//             <i className="fas fa-search"></i>
//           </button>
//         </div>
//       </div>

//       {/* Category Filter */}
//       <div className="category-filter">
//         <button 
//           className={activeCategory === 'all' ? 'active' : ''} 
//           onClick={() => setActiveCategory('all')}
//         >
//           All Items
//         </button>
//         <button 
//           className={activeCategory === 'pizza' ? 'active' : ''} 
//           onClick={() => setActiveCategory('pizza')}
//         >
//           Pizza
//         </button>
//         <button 
//           className={activeCategory === 'mains' ? 'active' : ''} 
//           onClick={() => setActiveCategory('mains')}
//         >
//           Main Courses
//         </button>
//         <button 
//           className={activeCategory === 'starters' ? 'active' : ''} 
//           onClick={() => setActiveCategory('starters')}
//         >
//           Starters
//         </button>
//         <button 
//           className={activeCategory === 'desserts' ? 'active' : ''} 
//           onClick={() => setActiveCategory('desserts')}
//         >
//           Desserts
//         </button>
//         <button 
//           className={activeCategory === 'salads' ? 'active' : ''} 
//           onClick={() => setActiveCategory('salads')}
//         >
//           Salads
//         </button>
//       </div>

//       {/* Pizza Special Offer Section */}
//       <div className="special-offer">
//         <div className="offer-content">
//           <div className="offer-text">
//             <h2>Pizza Special Offer!</h2>
//             <p>Buy any 2 large pizzas and get 1 medium pizza <span className="highlight">FREE</span></p>
//             <p className="offer-details">Offer valid until the end of the month. Dine-in only.</p>
//             <button className="offer-btn">Order Now</button>
//           </div>
//           <div className="offer-image">
//             <div className="pizza-img">🍕</div>
//           </div>
//         </div>
//       </div>

//       {/* Popular Dishes Section */}
//       <div className="popular-section">
//         <h2>Most Popular Dishes</h2>
//         <div className="popular-dishes">
//           {popularDishes.map(item => (
//             <div key={item.id} className="popular-item">
//               <div className="popular-image">
//                 <span className="emoji">{item.image}</span>
//               </div>
//               <div className="popular-details">
//                 <h3>{item.name}</h3>
//                 <p className="popular-desc">{item.description}</p>
//                 <p className="popular-price">${item.price.toFixed(2)}</p>
//                 <button 
//                   className="add-to-cart"
//                   onClick={() => addToCart(item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Menu Items Grid */}
//       <div className="menu-items">
//         <h2>{activeCategory === 'all' ? 'All Menu Items' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}</h2>
//         <div className="items-grid">
//           {filteredItems.length > 0 ? (
//             filteredItems.map(item => (
//               <div key={item.id} className="menu-item">
//                 <div className="item-image">
//                   <span className="emoji">{item.image}</span>
//                 </div>
//                 <div className="item-details">
//                   <div className="item-header">
//                     <h3>{item.name}</h3>
//                     <span className="price">${item.price.toFixed(2)}</span>
//                   </div>
//                   <p className="description">{item.description}</p>
//                   <button 
//                     className="add-to-cart"
//                     onClick={() => addToCart(item)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="no-results">
//               <p>No dishes found matching your search.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }






























import React, { useState, useEffect } from "react";
import '../Menu/Menu.css'
import pizza from '../../assets/imgs/pizza.png'
import { FaSearch, FaStar, FaPlus, FaHeart, FaShoppingCart } from "react-icons/fa";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(new Set());
  const [cartItems, setCartItems] = useState([]);

  const categories = ["All", "Pizza", "Burger", "Dessert", "Salads", "Beverages"];
  
  const menuItems = [
    {
      id: 1,
      name: "Pizza Margherita",
      price: "$32",
      rating: 4.8,
      img: "/assets/imgs/pizza.png",
      category: "Pizza",
      description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil",
      popular: true
    },
    {
      id: 2,
      name: "Chicken and Vegetables",
      price: "$27",
      rating: 4.6,
      img: "/assets/imgs/chicken.png",
      category: "Burger",
      description: "Grilled chicken breast with fresh vegetables and herbs",
      popular: true
    },
    {
      id: 3,
      name: "French Fries",
      price: "$12",
      rating: 4.5,
      img: "/assets/imgs/fries.png",
      category: "Burger",
      description: "Crispy golden fries served with your choice of dipping sauce",
      popular: true
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      price: "$18",
      rating: 4.9,
      img: "/assets/imgs/pizza.png",
      category: "Dessert",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      popular: false
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: "$15",
      rating: 4.3,
      img: "/assets/imgs/pizza.png",
      category: "Salads",
      description: "Fresh romaine lettuce with parmesan cheese and croutons",
      popular: false
    },
    {
      id: 6,
      name: "Fresh Orange Juice",
      price: "$8",
      rating: 4.7,
      img: "/assets/imgs/pizza.png",
      category: "Beverages",
      description: "Freshly squeezed orange juice, served chilled",
      popular: false
    }
  ];

  const popularItems = menuItems.filter(item => item.popular);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter items based on category and search term
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
    // Add visual feedback
    const button = document.querySelector(`[data-item-id="${item.id}"]`);
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
  };

  const toggleFavorite = (itemId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
      } else {
        newFavorites.add(itemId);
      }
      return newFavorites;
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Skeleton Loading Components
  const SkeletonCard = () => (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-footer">
          <div className="skeleton-price"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );

  const SkeletonPopularCard = () => (
    <div className="skeleton-popular-card">
      <div className="skeleton-popular-image"></div>
      <div className="skeleton-popular-content">
        <div className="skeleton-popular-title"></div>
        <div className="skeleton-popular-description"></div>
        <div className="skeleton-popular-footer">
          <div className="skeleton-popular-price"></div>
          <div className="skeleton-popular-button"></div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="menu-page">
        {/* Header */}
        <div className="menu-header">
          <h1>Our Menu</h1>
          <p>Discover our delicious selection of dishes</p>
        </div>

        {/* Search Skeleton */}
        <div className="search-bar skeleton-search">
          <div className="skeleton-search-icon"></div>
          <div className="skeleton-search-input"></div>
        </div>

        {/* Categories Skeleton */}
        <div className="categories">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="skeleton-category"></div>
          ))}
        </div>

        {/* Promotion Skeleton */}
        <div className="skeleton-promotion">
          <div className="skeleton-promo-content">
            <div className="skeleton-promo-text"></div>
            <div className="skeleton-promo-button"></div>
          </div>
          <div className="skeleton-promo-image"></div>
        </div>

        {/* Popular Items Skeleton */}
        <h2 className="section-title">Most Popular</h2>
        <div className="popular-list">
          {[1, 2, 3].map(i => (
            <SkeletonPopularCard key={i} />
          ))}
        </div>

        {/* All Items Skeleton */}
        <h2 className="section-title">All Items</h2>
        <div className="menu-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="menu-page">
      {/* Header */}
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Discover our delicious selection of dishes</p>
      </div>

      {/* Search */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Search for dishes..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat, i) => (
          <button 
            key={i} 
            className={`category ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Promotions */}
      <div className="promotion">
        <div className="promo-text">
          <p className="exclusive">Exclusive Offer</p>
          <h3>Buy 1 Get 1 Free</h3>
          <p>on all Pizza today</p>
          <button className="promo-btn">Order Now</button>
        </div>
        <img src={pizza} alt="Pizza promotion" />
      </div>

      {/* Popular Items */}
      <h2 className="section-title">Most Popular</h2>
      <div className="popular-list">
        {popularItems.map((item) => (
          <div className="popular-card" key={item.id}>
            <div className="card-image">
              <img src={item.img} alt={item.name} />
              <button 
                className={`favorite-btn ${favorites.has(item.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(item.id)}
              >
                <FaHeart />
              </button>
            </div>
            <div className="card-info">
              <h4>{item.name}</h4>
              <p className="description">{item.description}</p>
              <div className="card-footer">
                <div className="price-rating">
                  <span className="price">{item.price}</span>
                  <div className="rating">
                    <FaStar className="star" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                  data-item-id={item.id}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* All Menu Items */}
      <h2 className="section-title">All Items</h2>
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <div className="card-image">
              <img src={item.img} alt={item.name} />
              <button 
                className={`favorite-btn ${favorites.has(item.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(item.id)}
              >
                <FaHeart />
              </button>
            </div>
            <div className="card-info">
              <h4>{item.name}</h4>
              <p className="description">{item.description}</p>
              <div className="card-footer">
                <div className="price-rating">
                  <span className="price">{item.price}</span>
                  <div className="rating">
                    <FaStar className="star" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                  data-item-id={item.id}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="no-results">
          <p>No items found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
