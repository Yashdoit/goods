var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.get("/fetch_all_producttype", function (req, res, next) {
  pool.query("select * from producttype where categoryid=?",[req.query.categoryid], function (error, result) {
    if (error) 
    {
      console.log(error);
      res.status(500).json({ result: [], message: "Server error: issue in database" });
    } 
    
    else 
    {
      res.status(200).json({ result: result, message: "Success" });
    }
  });
});


$('#categoryid').change(function(){

    $.get('/category/fetch_all_category',function(data){
        //alert(data.message)


        console.log('datta',data)
        data.result.map((item)=>{
            //alert(item.categoryname)
            $('#categoryid').append($('<option>').text(item.categoryname).val(item.categoryid))
        })
    })
})


module.exports = router;