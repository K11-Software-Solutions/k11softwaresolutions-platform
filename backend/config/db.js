// No database connection required for SQLite with direct file access.
const connectDB = () => {
  // SQLite does not require a connection setup here.
  console.log("✅ Using SQLite (no connection setup required)");
};

export default connectDB;
