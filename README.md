# ⚡️ Zap

Easy going Instagram captions. Preserved line breaks, desktop friendly, and emojis without hassle.

## Similar sites that do this

http://apps4lifehost.com/Instagram/CaptionMaker.html

They use `U+2063 : INVISIBLE SEPARATOR {invisible comma}` for the tricky part

Here's how they handle the replacement:

    var str = document.getElementById("demo").value;
    str = str.replace(/(?:\r\n|\r|\n)/g, "\u2063\n");
    document.getElementById("demo").value = str;
    el = (typeof el === 'string') ? document.querySelector(el) : el;

https://insta-space.org/

They use `U+2800 : BRAILLE PATTERN BLANK` for the tricky part

Here's how they handle the replacement:

    function copyToClipboard(element) {
       var $temp = $("<textarea>");
       var brRegex = /<br\s*[\/]?>/gi;
       $("body").append($temp);
       $temp.val($(element).html().replace(brRegex, "\r\n")).select();
       document.execCommand("copy");
       $temp.remove();
    }

## RESOURCES

https://clipboardjs.com/

How to identify unicode characters in provided text

- http://www.babelstone.co.uk/Unicode/whatisit.html

How to identity character code in provided text

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- Note - "Braille pattern blank" shows up in this, while invisible separator does not

Other pages:

- http://www.codetable.net/decimal/10240
- https://www.compart.com/en/unicode/U+2800
