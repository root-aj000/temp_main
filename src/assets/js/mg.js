
// // script for megamenu  start here

// document.addEventListener('DOMContentLoaded', function () {
//     // Get all dropdown toggles for mega menus
//     const dropdownToggles = document.querySelectorAll('[data-target]');

//     dropdownToggles.forEach(toggle => {
//         const targetId = toggle.getAttribute('data-target');
//         const megaMenu = document.getElementById(targetId);
//         let timeout;

//         // Function to handle mouse enter
//         const handleMouseEnter = function () {
//             if (window.innerWidth >= 1024) { // Only for larger screens
//                 clearTimeout(timeout); // Clear any existing timeout
//                 megaMenu.classList.remove('hidden'); // Show the mega menu
//             }
//         };

//         // Function to handle mouse leave
//         const handleMouseLeave = function () {
//             if (window.innerWidth >= 1024) { // Only for larger screens
//                 timeout = setTimeout(() => {
//                     if (!megaMenu.matches(':hover')) {
//                         megaMenu.classList.add('hidden'); // Hide the mega menu if not hovering
//                     }
//                 }, 200); // Adjust the delay as needed
//             }
//         };

//         // Keep mega menu open when hovering over it (only for larger screens)
//         megaMenu.addEventListener('mouseenter', handleMouseEnter);
//         megaMenu.addEventListener('mouseleave', handleMouseLeave);

//         // Add mouse enter and leave events for the toggle
//         toggle.addEventListener('mouseenter', handleMouseEnter);
//         toggle.addEventListener('mouseleave', handleMouseLeave);

//         // Toggle the mega menu on click (works on all devices)
//         toggle.addEventListener('click', function (event) {
//             event.stopPropagation(); // Prevent the click from bubbling up
//             clearTimeout(timeout); // Clear timeout on click

//             // Close all other mega menus
//             dropdownToggles.forEach(otherToggle => {
//                 if (otherToggle !== toggle) {
//                     const otherTargetId = otherToggle.getAttribute('data-target');
//                     const otherMegaMenu = document.getElementById(otherTargetId);
//                     if (otherMegaMenu) {
//                         otherMegaMenu.classList.add('hidden'); // Hide other mega menus
//                     }
//                 }
//             });

//             // Toggle the clicked mega menu
//             megaMenu.classList.toggle('hidden');
//         });
//     });

//     // Close all mega menus when clicking outside
//     document.addEventListener('click', function () {
//         dropdownToggles.forEach(toggle => {
//             const targetId = toggle.getAttribute('data-target');
//             const megaMenu = document.getElementById(targetId);
//             if (megaMenu) {
//                 megaMenu.classList.add('hidden'); // Hide the mega menu
//             }
//         });
//     });

//     // Mobile menu toggle
//     const mobileButton = document.querySelector('[data-collapse-toggle="megamenu-cta"]');
//     const mobileMenu = document.getElementById('megamenu-cta'); // Adjust this ID to your mobile menu's ID

//     mobileButton.addEventListener('click', function (event) {
//         event.stopPropagation(); // Prevent the click from bubbling up
//         mobileMenu.classList.toggle('hidden'); // Toggle mobile menu visibility

//         // Close all mega menus when mobile menu is opened
//         dropdownToggles.forEach(toggle => {
//             const targetId = toggle.getAttribute('data-target');
//             const megaMenu = document.getElementById(targetId);
//             if (megaMenu) {
//                 megaMenu.classList.add('hidden'); // Hide mega menus
//             }
//         });
//     });
// });



// // script for megamenu  ends here









// with animation
document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown toggles for mega menus
    const dropdownToggles = document.querySelectorAll('[data-target]');

    dropdownToggles.forEach(toggle => {
        const targetId = toggle.getAttribute('data-target');
        const megaMenu = document.getElementById(targetId);
        let timeout;

        // Function to handle mouse enter
        const handleMouseEnter = function () {
            if (window.innerWidth >= 1024) { // Only for larger screens
                clearTimeout(timeout); // Clear any existing timeout
                megaMenu.classList.remove('hidden', 'opacity-0'); // Show the mega menu
                megaMenu.classList.add('opacity-100'); // Set opacity to 100
            }
        };

        // Function to handle mouse leave
        const handleMouseLeave = function () {
            if (window.innerWidth >= 1024) { // Only for larger screens
                timeout = setTimeout(() => {
                    if (!megaMenu.matches(':hover')) {
                        megaMenu.classList.remove('opacity-100'); // Set opacity to 0
                        timeout = setTimeout(() => {
                            megaMenu.classList.add('hidden'); // Hide the mega menu
                        }, 300); // Match this duration with the CSS transition duration
                    }
                }, 200); // Adjust the delay as needed
            }
        };

        // Keep mega menu open when hovering over it (only for larger screens)
        megaMenu.addEventListener('mouseenter', handleMouseEnter);
        megaMenu.addEventListener('mouseleave', handleMouseLeave);

        // Add mouse enter and leave events for the toggle
        toggle.addEventListener('mouseenter', handleMouseEnter);
        toggle.addEventListener('mouseleave', handleMouseLeave);

        // Toggle the mega menu on click (works on all devices)
        toggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the click from bubbling up
            clearTimeout(timeout); // Clear timeout on click

            // Close all other mega menus
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherTargetId = otherToggle.getAttribute('data-target');
                    const otherMegaMenu = document.getElementById(otherTargetId);
                    if (otherMegaMenu) {
                        otherMegaMenu.classList.remove('opacity-100'); // Set opacity to 0
                        timeout = setTimeout(() => {
                            otherMegaMenu.classList.add('hidden'); // Hide other mega menus
                        }, 300); // Match this duration with the CSS transition duration
                    }
                }
            });

            // Toggle the clicked mega menu
            if (megaMenu.classList.contains('hidden')) {
                megaMenu.classList.remove('hidden', 'opacity-0'); // Show the mega menu
                megaMenu.classList.add('opacity-100'); // Set opacity to 100
            } else {
                megaMenu.classList.remove('opacity-100'); // Set opacity to 0
                timeout = setTimeout(() => {
                    megaMenu.classList.add('hidden'); // Hide the mega menu
                }, 300); // Match this duration with the CSS transition duration
            }
        });
    });

    // Close all mega menus when clicking outside
    document.addEventListener('click', function () {
        dropdownToggles.forEach(toggle => {
            const targetId = toggle.getAttribute('data-target');
            const megaMenu = document.getElementById(targetId);
            if (megaMenu) {
                megaMenu.classList.remove('opacity-100'); // Set opacity to 0
                timeout = setTimeout(() => {
                    megaMenu.classList.add('hidden'); // Hide the mega menu
                }, 600); // Match this duration with the CSS transition duration
            }
        });
    });

    // Mobile menu toggle
    const mobileButton = document.querySelector('[data-collapse-toggle="megamenu-cta"]');
    const mobileMenu = document.getElementById('megamenu-cta'); // Adjust this ID to your mobile menu's ID

    mobileButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click from bubbling up
        mobileMenu.classList.toggle('hidden'); // Toggle mobile menu visibility

        // Close all mega menus when mobile menu is opened
        dropdownToggles.forEach(toggle => {
            const targetId = toggle.getAttribute('data-target');
            const megaMenu = document.getElementById(targetId);
            if (megaMenu) {
                megaMenu.classList.remove('opacity-100'); // Set opacity to 0
                timeout = setTimeout(() => {
                    megaMenu.classList.add('hidden'); // Hide mega menus
                }, 300); // Match this duration with the CSS transition duration
            }
        });
    });
});

// ends with animations


// only for service page HOW IT WORKS SECTION //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


