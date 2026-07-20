// Gentle scroll-reveal for Curious Over 60
(function(){
  var els = document.querySelectorAll('.reveal, ul.promise');
  if(!('IntersectionObserver' in window)){
    els.forEach(function(e){e.classList.add('visible');});
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    });
  },{threshold:0.15});
  els.forEach(function(e){io.observe(e);});
})();
