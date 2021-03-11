
   //we have to only run the javascript when the dom is ready so after the page is loaded only after that we should start the function of our javascript
    
    $(document).ready(()=>{

         
   
    console.log($)
    /*  $ = jquery */

   // the syntax for calling a fucntion when a selector is clicked 


  // $('p').click();
  //  $('p').click(function() {

  //   console.log("tu ta saddi care nahi karta",this);
    //$(this).hide(); //this keyword hides the element which we cclicke on 

  //  });

   

   //there are three main types of selectors 1.element selector 2.id selector 3.class selector 
  /*  element here is p  which is selected and hiden above


   now id selector-
   and class selector 
   $('#2').click();
   $('.odd').click();
   
  
  $('*').click()
    */

      
      // this is on functions implementation  which can perform vaious task
   // $('p.odd').click();
      
      $('p').on(


        {
          click: function () {

            console.log("thanks for cllicking", this);
          },


          mouseleave: function () {

            console.log("mouseleave");
          }
        }
      )
     $("#add_user").submit(function (event) {
    alert("Data added Successfully");
     });
      /* we will use a call back function which will show in c  */
    /*  $('#jq').hide(1000, function () {
          
              console.log("hidden and this is call back")
        });
      $('#jq').show(1000, function () {
          
              console.log("shown and this is call back")
        });
      $('#an').hide(1200, function () {
          
              console.log("hidden and this is call back")
        });
      $('#an').show(1200, function () {
          
              console.log("shown and this is call back")
        });    */
      
  /*    $('#but').click(function () {
        
        $('#jq').toggle(1000);
       $('#jq').fadeOut(1000);
       $('#jq').fadeIn(1000);
        $('#an').toggle(1000);
        $('#an').slideup(1000); ,slide down ,slide toggle
      })
*/
      /*
 Animate function in jQuery
    $('#wiki').animate({
        opacity:0.3,
        height: '150px',
        width:'350px'

    }, "fast")
    $('#wiki').animate({ opacity: 0.3 }, 4000);
    $('#wiki').animate({ opacity: 0.9 }, 1000);
    $('#wiki').animate({ width: '350px' }, 12000);

      */
       
      /*  $('#ta').val('setting it to harry');
    $('#ta').html('setting it to harry');
    $('#ta').html('setting it to harry3');
    $('#inp').html('setting it to harry3');
    $('#inp').val('setting it to harry3');
    $('#inp').empty()
    $('#wiki').empty()
    $('#wiki').text('you are good')
    $('#wiki').remove()

        $('#wiki').addClass('myclass')
    $('#wiki').addClass('myclass2')
    $('#wiki').removeClass('myclass2')
    $('#wiki').css('background-color', 'red')
    $('#wiki').css('background-color')
    */

      //connecting with the server without reloading the page is known as ajax


         /* AJAX Using jQuery
     $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

     $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

     $.post('https://code.jquery.com/jquery-3.3.1.js',
         { name: 'harry', channel: 'code with harry' },
          function (data, status) { alert(status) });
      */
   })
