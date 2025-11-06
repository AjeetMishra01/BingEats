export const becomeChef = async (req, res) => {
  try {
    const { name, specialty, address } = req.body;

    //We have to add original chef schema here 

    res.status(201).json({
      success: true,
      message: "Chef profile created (dummy response)",
      chef: { name, specialty, address },
    });
  } catch (error) {
    console.error("Error in becomeChef:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error during chef registration",
    });
  }
};
