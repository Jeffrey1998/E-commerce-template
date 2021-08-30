module.exports = app => {
    const product = require("../controllers/tutorial.controller.js");
    const controller = require("../controllers/file.controller.js")
  
    var express = require("express");
    var router = express.Router();
  
    // Create a new Tutorial
    router.post("/", product.create);
  
    // Retrieve all Tutorials
    router.get("/", product.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", product.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", product.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", product.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", product.delete);
  
    // Delete all Tutorials
    router.delete("/", product.deleteAll);
  
    app.use('/api/products', router);
    

      router.post("api/upload", controller.upload);
      router.get("api/files", controller.getListFiles);
      router.get("api/files/:name", controller.download);
    
      app.use(router);
      const directoryPath = __basedir + "\\app\\resources\\static\\assets\\uploads\\";
      app.use('/api/images/', express.static(directoryPath));
  };