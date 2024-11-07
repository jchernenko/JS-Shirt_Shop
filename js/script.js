/*-- Jeff Chernenko | A00745858 | COMP 2132 */


//subtract -- adjusts total price based on subtraction of quantity
$(function() {
  const price = parseFloat($('#price').text());
  $('#subtract').on("click", function() {
    const $qty = $('#qty');
    let current = parseFloat($qty.val());
    if (current > 0) {
      current--;
      $qty.val(current);
      $('#total').text((price * current).toFixed(2));
    } 
    else {
      $('#total').text(0);
    }
  });


  //add -- adjusts total price based on addition of quantity
  $('#add').on("click", function() {
    const $qty = $('#qty');
    let current = parseFloat($qty.val());
    current++;
    $qty.val(current);
    $('#total').text((price * current).toFixed(2));
  });


  //qty -- adjusts total price based on a manual entry of quantity
  $('#qty').on("input", function() {
    const $qty = $(this);
    const current = parseFloat($qty.val());
    if (!isNaN(current)) {
      $('#total').text((price * current).toFixed(2));
    } 
    else {
      $('#total').text(0);
    }
  });


  //live updates the Color: string with selected radio button color and makes sure first letter is capitalized
  $(function() {
    $('label[for="color"]').html('<strong>Color: </strong>Black');
    $('input[name="color"]').on('change', function() {
      const selectColor = $('input[name="color"]:checked').val();
      const $colorLabel = $('label[for="color"]');
      $colorLabel.html('<strong>Color: </strong>' + selectColor.charAt(0).toUpperCase() + selectColor.slice(1));
    });
  });


  //live updates the Size: string with selected radio button size and makes sure first letter is capitalized
  $(function() {
    const $sizeLabel = $('label[for="size"]');
    $sizeLabel.html('<strong>Size: </strong>');
    $('input[name="size"]').on('change', function() {
      const selectSize = $('input[name="size"]:checked').val();
      if (selectSize) {
        const capitalSize = selectSize.charAt(0).toUpperCase() + selectSize.slice(1);
        $sizeLabel.html('<strong>Size: </strong>' + capitalSize);
      } 
      else {
        $sizeLabel.html('<strong>Size: </strong>');
      }
    });
  });


  //updates the main-image based on the chosen thumbnail
  $(function() {
    $('input[name="color"]').on('change', function() {

      const selectedColor = $('input[name="color"]:checked').val();
      const imagePath = 'product-images/t-shirt-' + selectedColor;
      const mainImageSource = imagePath + '-front.jpg';
      const thumb1Source = imagePath + '-no-model.jpg';
      const thumb2Source = imagePath + '-front.jpg';
      const thumb3Source = imagePath + '-back.jpg';
      
      $('label[for="main-image"] img').attr('src', mainImageSource);
      $('label[for="thumb1"] img').attr('src', thumb1Source);
      $('label[for="thumb2"] img').attr('src', thumb2Source);
      $('label[for="thumb3"] img').attr('src', thumb3Source);
    });
    
    $('.thumbnail').on('click', function() {
      const thumbSource = $(this).attr('src');
      $('label[for="main-image"] img').attr('src', thumbSource);
    });
  });


  //Submit button control until all fields are selected
  $(document).ready(function() {
    $('#submit-btn').prop('disabled', true).val('Choose A Size');
  
    function checkForSize() {
      
      const quantity = $('#qty').val();
      const color = $('input[name="color"]:checked').val();
      const size = $('input[name="size"]:checked').val();
  
      if (quantity && color && size) {

        $('#submit-btn').prop('disabled', false).val('Add To Cart');
        $('#submit-btn').css('color', 'lightblue');
        $('#submit-btn').css('border', '2px gold lightblue');
      } 
      else {

        $('#submit-btn').prop('disabled', true).val('Choose A Size');
        $('#submit-btn').css('color','white');
        $('#submit-btn').css('border', 'none');
      }
    }
  
    $('#qty, input[name="color"], input[name="size"]').change(function() {
      checkForSize();
    });
  
    $('#a7Form').submit(function(event) {
      form.submit();
      $('#a7Form')[0].reset();
      checkFields(); 
    });
  });

});