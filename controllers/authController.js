const signUp = (req, res, next) => {
  res.json({
    status: "success",
    message: "signup successful",
  });
};

export { signUp };
