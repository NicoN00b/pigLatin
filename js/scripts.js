var vowel = ['a','e','i','o','u'];

if ( index = 0; index === 'vowel') {
  return ('input#latin').push('way');
}


$(document).ready(function() {
   $("form#latin").submit(function() {
   var resultString = $('input#latin').val.split('');
   var pigLatinString = pigLatin(resultString);


   $(resultString).alert();
 });
});


// $('input#latin').toString();
//
// if (.charAt(0) === 'a' || .charAt(0) === 'e' || .charAt(0) === 'i' || .charAt(0) === 'o' || .charAt(0) === 'u') {
//   return ('input#latin').push('way');
// }
