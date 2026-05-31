
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/vehicles', require('./routes/vehicleRoutes')); // This line will register the vehicle routes
app.use('/api/bookings', require('./routes/bookingRoutes')); // This line will register the booking routes
app.use('/api/categories', require('./routes/vehicleCategoryRoutes')); // This line will register the vehicle category routes
app.use('/api/reviews', require('./routes/reviewRoutes')); // This line will register the review routes
//app.use('/api/tasks', require('./routes/taskRoutes'));

// Export the app object for testing
if (require.main === module) {
    connectDB();
    // If the file is run directly, start the server
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }


module.exports = app
