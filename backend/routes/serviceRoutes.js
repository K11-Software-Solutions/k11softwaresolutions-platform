import express from "express";

const router = express.Router();

// Example service route
router.get("/", (req, res) => {
  res.json({ message: "Service routes working!" });
});

export default router;
