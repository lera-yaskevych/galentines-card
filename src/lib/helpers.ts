export const getDisappointmentText = (count: number) => {
  switch (count) {
    case 1:
      return 'Why not?';
    case 2:
      return 'No, but seriously, why?';
    case 3:
      return 'Please...';
    case 4:
      return "You're breaking my heart right now";
    case 5:
      return 'You give me no other option';
    default:
      return "Well, you've been warned";
  }
};

export const getReliefText = (count: number) => {
  switch (count) {
    case 1:
    case 2:
      return 'Just like I thought, it was just an accidental wrong click';
    case 3:
      return 'Thank you!';
    case 4:
      return "I'm recovered ❤️‍🩹";
    case 5:
      return 'It was a good time to change your mind';
    default:
      return "Now that's better";
  }
};
