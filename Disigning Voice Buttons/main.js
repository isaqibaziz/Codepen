var button = document.querySelectorAll(".subContainer");

var click_sound = new Audio();
click_sound.src =
   "https://www.dropbox.com/s/xfcb8khsheu73uu/zapsplat_multimedia_button_click_fast_plastic_49161.mp3?dl=1";

button.forEach((button) => {
   button.onclick = () => {
      click_sound.play();
      button.classList.toggle("active");
   };
});

alert(
   "Hello guys, I've created a Telegram group for web development learners, feel free to join the group, also for people who need help I'm there to help you too, I'm an experienced front end developer, group chat will be active and you will be able to learn together after around 20 people joined, so make it a chance to sharpen up your knowledge, join and stay tuned, follow the link in top left corner to join the group chat thanks!"
);