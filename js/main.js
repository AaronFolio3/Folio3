let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
});
 
typewriter
  .pauseFor(2000)
  .typeString(' Servicios de TI y consultoría de TI ')
  .pauseFor(200)
  .deleteChars(10)
  .start();