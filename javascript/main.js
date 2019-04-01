window.onload=function(){

    function copyToClipboard() {
        var clipboard = new ClipboardJS('.copyButton');
        clipboard.on('success', function(e) {
          $('body').css('background-color','#ffffaa');
          window.getSelection().removeAllRanges(); // deselects the text
          console.log(e);
        });
        clipboard.on('error', function(e) {
          console.log(e);
        });
    }

    function preserveCaptionLineBreaks() {
        var someText = $('#caption-input').text();
        someText = someText.replace(/(\r\n|\n|\r)/gm, '\u2800\r\n');
        $('#caption-input').text(someText);
        console.log("Input parsed!");
    }

    $('#convert').click(function(){
        preserveCaptionLineBreaks();
        copyToClipboard();
    });
}

// String.prototype.splice = function(idx, rem, str) {
//     return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
// };

// var captionInput;
// var captionLength;
// var banana;

// var brRegex = /<br\s*[\/]?>/gi;

        // function copy() {
        //   var copyText = document.querySelector("#caption-input");
        //   copyText.select();
        //   document.execCommand("copy");
        // }


    //
    //     // Copy to clipboard!
    //
    //
    //
    //
    //     // $('#caption-input').select()
    //     // document.execCommand("copy");
    //     // console.log("Copied to clipboard!")
    //     // $('body').append('<em>copied to clipboard!</em>');
    //
        // return false;


    //
    // var hiddenField = document.getElementById("hiddenInput");
    // hiddenField.value = captionInput
    //
    // // hiddenField.value = $('captionInput').innerHTML;
    // hiddenField.select();
    // document.execCommand("copy");

        // document.querySelector("#caption-input").select();
        // $('#caption-input').select();
        // document.execCommand("copy");
        // var copyText = document.querySelector("#caption-input");
        // copyText[0].select();
        // document.execCommand("copy");






  // This works! now figure out how to equate them with line breaks b/c this is just doing a single space
  // someText = someText.replace(/(\r\n|\n|\r)/gm, '\u2800');









// console.log("===================");
// console.log($('#caption-input').val().length);

// function parseInput(){
//   captionInput = $('#caption-input').html();
//   captionLength = captionInput.length;
//   console.log(captionInput);
//   console.log(captionLength);
// }

// var captionLength = $(captionInput).type();

// console.log("cat");

    // sentence.charCodeAt(index)
// console.log("asdd");




    // parseInput();

// captionInput.replace(brRegex, "XXX");

// var mystring = "hello world test world";
// var mystring = captionInput;
// var find = "&#x2800;";
// var regex = new RegExp(find, "g");
// $('#caption-input').html(mystring.replace(regex, "<span>g</span>"));




// "hello yay test yay"

  // parseInput();
  // var numElements = 0;
// for (var i = 0; i < 20; i++) {
//   parseInput();
//   if ( captionInput.charCodeAt(i) == 103 ) {
//     console.log(i);
//     var newTextInput = captionInput.slice(0, i) + "<span>" + captionInput.slice(i, i+1) + "</span>" + captionInput.slice(i+1);
//     $('#caption-input').html(newTextInput);
//     // captionInput = $('#caption-input').html();
//     numElements++;
//
//
//   }




// console.log(newTextInput);
