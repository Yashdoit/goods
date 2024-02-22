$(document).ready(function(){
    $.get('/category/fetch_all_category',function(data){
        //alert(data.message)


        console.log('datta',data)
        data.result.map((item)=>{
            //alert(item.categoryname)
            $('#categoryid').append($('<option>').text(item.categoryname).val(item.categoryid))
        })
    })

    $('#categoryid').change(function(){

        $.get('/category/fetch_all_types',{categoryid:$('#categoryid').val()},function(data){
            $('#typeid').empty()
    
            console.log('datta',data)

            $('#typeid').append($('<option>').text('Type'))

            data.result.map((item)=>{

                $('#typeid').append($('<option>').text(item.typename).val(item.typeid))
            })

    })
})



$('#typeid').change(function(){

    $.get('/category/fetch_all_brands',{typeid:$('#typeid').val()},function(data){
        $('#brandid').empty()

        console.log('datta',data)

        $('#brandid').append($('<option>').text('Brands'))

        data.result.map((item)=>{
            
            $('#brandid').append($('<option>').text(item.brandname).val(item.brandid))
        })

})
})

$('#picture').change(function(e){
    // alert('hello')
    $('#productimage').attr('src',URL.createObjectURL(e.currentTarget.files[0]))
})

$('#showpicture').change(function(e){
    alert('hello')
    $('#productimage').attr('src',URL.createObjectURL(e.currentTarget.files[0]))
})

})