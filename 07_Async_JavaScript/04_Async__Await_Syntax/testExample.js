// Function to simulate fetching user data from a database
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetched data for user ${userId}`);
      resolve({ id: userId, name: `User ${userId}` });
    }, 1000); // Simulate a 1-second response time
  });
}

// Function to simulate fetching orders for a user
function getUserOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetched orders for user ${userId}`);
      // Assume each user has between 1 to 3 orders
      const orders = [];
      const orderCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 1; i <= orderCount; i++) {
        orders.push({ orderId: userId * 100 + i, item: `Item ${i}` });
      }
      resolve(orders);
    }, 1500); // Simulate a 1.5-second response time
  });
}

// Function to simulate fetching shipping details for an order
function getShippingDetails(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetched shipping details for order ${orderId}`);
      resolve({ orderId, status: "Delivered" });
    }, 500); // Simulate a 0.5-second response time
  });
}

// Function to fetch full data for a single user (user data, orders, and shipping details for each order)
async function fetchUserFullData(userId) {
  try {
    // Fetch user data and orders concurrently using Promise.all
    const [userData, userOrders] = await Promise.all([
      getUserData(userId),
      getUserOrders(userId)
    ]);

    // Fetch shipping details for each order concurrently
    const shippingPromises = userOrders.map(order => getShippingDetails(order.orderId));
    const shippingDetails = await Promise.all(shippingPromises);

    // Combine the data into a single object for the user
    return {
      user: userData,
      orders: userOrders,
      shipping: shippingDetails
    };
  } catch (error) {
    console.error(`Error fetching data for user ${userId}:`, error);
    throw error;
  }
}

// Function to fetch full data for multiple users
async function fetchAllUsersFullData() {
  try {
    // Assume we have 3 users
    const userIds = [1, 2, 3];

    // Execute fetching data for each user concurrently
    const usersDataPromises = userIds.map(userId => fetchUserFullData(userId));
    const allUsersData = await Promise.all(usersDataPromises);

    console.log("Final result for all users:", allUsersData);
    return allUsersData;
  } catch (error) {
    console.error("Error fetching data for all users:", error);
  }
}

// Call the main function to fetch data for all users
fetchAllUsersFullData();
