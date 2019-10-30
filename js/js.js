$(document).ready(function() {
    $(".hero-video source").attr('src', 'media/compilation_bg.mp4');
    $(".hero-video")[0].load();
    $(".hero-video")[0].play();
});