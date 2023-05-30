

// Define the videos and their corresponding IDs
var videos = {
  "vertical row": "DbcLg8nRWEg",
  "Dead-hang": "TI5XcJafIEw",
  "Dip Hold": "NOTRECORD",
  "Downward Dog": "NOTRECORD",
  "Incline Push-up": "d0Quph3lgAg",
  "Plank": "rbkn8L_57NQ",
  "Box Squat": "NOTRECORD",
  "Reverse Lunge": "pHExlHQT2AI",
  "Knee Push-up": "hlbq0GBxckE",
  "Crow Lifts": "pktNxDMjMro",
  "Incline Row" :"NOTRECORD",
  "Scap Pulls": "NOTRECORD",
  "Wall HS": "ilKLt2gTSzk",
  "Hollow Hold": "hAC5i3oYOZY",
  "Step Up": "dzJeV5OlFuc",
  "Knee Raises": "VqsXJ3ngKXyk",
  "Pushup": "qE7g6nJiACM",
};

// Define the video descriptions
var videoDesc = {
  "vertical row": "A pulling exercise where you hang from a bar and lift your body vertically by retracting the shoulder blades and engaging the back muscles.",
  "Dead-hang": "A static exercise where you hang from a bar with straight arms, engaging the grip and shoulder muscles.",
  "Dip Hold": "A static exercise where you hold the top position of a dip, with arms fully extended and body supported by the bars, targeting the chest, shoulders, and triceps.",    
  "Downward Dog": "A yoga pose where you form an inverted V-shape with your body, with hands and feet on the ground, stretching the shoulders, hamstrings, and calves.",
  "Incline Push-up": "A push-up variation where your hands are elevated on a surface higher than your feet, targeting the chest, shoulders, and triceps.",
  "Plank": "A core exercise where you hold a straight body position parallel to the ground, supported by forearms and toes, targeting the abdominal muscles and overall core stability.",
  "Box Squat": "A squat variation where you sit back onto a box or bench before standing up again, focusing on hip and glute strength.",
  "Reverse Lunge": "A lunge variation where you step backward with one leg, lowering your body until both knees are bent at 90-degree angles, targeting the quadriceps, hamstrings, and glutes.",
  "Knee Push-up": "A modified push-up where you perform the exercise with your knees on the ground, reducing the load on the upper body muscles.",
  "Crow Lifts": "A yoga arm balance where you balance your body on your hands while leaning forward and lifting your feet off the ground.",
  "Incline Row": "A rowing exercise where you pull your body up to a bar with your feet elevated on a surface higher than your hands, targeting the back and bicep muscles.",
  "Scap Pulls": "An exercise that focuses on scapular retraction and depression by pulling the shoulder blades down and together, improving shoulder stability and strength.",
  "Wall HS": "A handstand variation where you perform a handstand with your back against a wall for support, improving balance and upper body strength.",
  "Hollow Hold": "A core exercise where you lie on your back and lift your head, shoulders, and legs off the ground, creating a 'hollow' shape and engaging the abdominal muscles.",
  "Step Up": "A lower body exercise where you step onto a raised platform with one foot and then bring the other foot up, targeting the quadriceps, hamstrings, and glutes.",
  "Knee Raises": "An exercise where you hang from a bar and lift your knees toward your chest, targeting the abdominal muscles, particularly the lower abs.",
  "Pushup": "A classic upper body exercise where you start in a plank position and lower your body by bending your arms, targeting the chest, shoulders, and triceps.",
};

// Make the draggable container draggable
$(document).ready(function() {
  $(".draggableContainer").draggable();
});

// Initialize the YouTube player
$(document).ready(function (){
  var player = new YT.Player('youtubePlayer', {
    width: '100%',
    height: '100%'
  });

  // Handle click events on the image map areas
  $("#myMap").on("click", "area[role=click]", function(e){
    e.stopPropagation();

    var position = $(e.target).attr('alt');

    var popup = document.getElementById('videoPopup');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block'; // Show the overlay

    var videoId = videos[position];
    var videoTitle = $('area[title="' + position + '"]').attr("alt");
    var videoDescription = videoDesc[position]; // Get the video description based on position

    $("#videoTitle").text(videoTitle);
    $("#videoDescription").text(videoDescription);

    if (videoId) {
      player.loadVideoById(videoId, 0);
      player.playVideo();
    }
  });

  // Handle click event on the close button
  $(document).on('click', '.close-button', function() {
    var popup = document.getElementById('videoPopup');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none'; // Hide the overlay

    if (player) {
      player.pauseVideo();
    }
  });
});

// Handle click event on the close button outside the player popup
$(document).on('click', '.close-button', function() {
  var popup = document.getElementById('videoPopup');
  var overlay = document.getElementById('overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none'; // Hide the overlay

  if (player) {
    player.stopVideo();
  }
});
