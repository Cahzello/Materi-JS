<?php

do {
  echo "What would you like to do?\n";
  echo "1. Go for a walk\n";
  echo "2. Play a game\n";
  echo "3. Watch a movie\n";

  $choice = readline("Enter the number of your choice: ");

  if ($choice === "1") {
    echo "Going for a walk!\n";
  } else if ($choice === "2") {
    echo "Playing a game!\n";
  } else if ($choice === "3") {
    echo "Watching a movie!\n";
  } else {
    echo "Invalid choice. Please try again or type 'exit' to close the program.\n";
    $choice = readline("Enter your choice: ");
    if ($choice === "exit") {
      break;
    }
  }
} while (true);

