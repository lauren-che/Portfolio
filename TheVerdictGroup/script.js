// This line of code selects the HTML ul element inside the nav tag with the ID of 'menuList' and assigns it to a constant variable named menuList. This variable can be used to manipulate the selected element.
const menuList = document.getElementById('menuList');

// This line of code sets the CSS property max-height of the menuList element to 0 pixels, effectively hiding the element from view.
menuList.style.maxHeight = '0px';

// This line of code declares a new function named toggleMenu(), which will be called when a user clicks on the menu icon on mobile view.
function toggleMenu() {
  // This line of code checks whether the max-height property of the menuList element is currently set to 0 pixels. If it is, the following code block will execute.
  if (menuList.style.maxHeight === '0px') {
    // If it is, this line of code sets the max-height property of the menuList element to 130 pixels, causing the element to expand and become visible.
    menuList.style.maxHeight = '130px';
    // This line of code signifies the start of the else code block, which will execute if the condition in line 10 is not true.
  } else {
    menuList.style.maxHeight = '0px';
  }
}
