$(document).ready(function() {
    // FAQ toggle functionality
    $('.faq-title').click(function() {
        const $currentFaq = $(this).closest('.faq');
        const $currentContent = $currentFaq.find('.faq-content');
        const $currentBtn = $currentFaq.find('.faq-btn');
        
        // Close all other FAQs
        $('.faq').not($currentFaq).removeClass('active');
        $('.faq-content').not($currentContent).slideUp(300);
        $('.faq-btn').not($currentBtn).removeClass('active');
        
        // Toggle current FAQ
        $currentFaq.toggleClass('active');
        $currentContent.slideToggle(300);
        $currentBtn.toggleClass('active');
    });

    // Header scroll functionality
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $('.header-section').addClass('scrolled');
            $('.banner-section .container ').addClass('scrolled');
        } else {
            $('.header-section').removeClass('scrolled');
            $('.banner-section .container ').removeClass('scrolled');
        }
    });

    // Burger menu functionality
    $('.fa-bars').click(function() {
        $('.header-section .container .nav-col.nav-mobile').slideToggle(300);
        $('.header-section').toggleClass('opened');
    });
});