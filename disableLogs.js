if (process.env.NODE_ENV === "production") {
    console.log = function() {};
    console.info = function() {};
    console.error = function() {};
  }
  