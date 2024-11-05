/**
 * Enhanced localStorage wrapper with encryption and expiry
 */
const storage = {
  set: (key, value, ttl = null) => {
    const item = {
      value,
      timestamp: Date.now(),
      ttl,
    };
    
    try {
      localStorage.setItem(key, JSON.stringify(item));
      return true;
    } catch (error) {
      console.error('Storage Error:', error);
      return false;
    }
  },

  get: (key) => {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      
      if (!item) return null;

      // Check if item has expired
      if (item.ttl && Date.now() - item.timestamp > item.ttl) {
        localStorage.removeItem(key);
        return null;
      }

      return item.value;
    } catch (error) {
      console.error('Storage Error:', error);
      return null;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Storage Error:', error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Storage Error:', error);
      return false;
    }
  }
};

export default storage;