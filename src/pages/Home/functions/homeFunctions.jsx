import ProgressBar from "@ramonak/react-progress-bar";

//functions ____________________________________________________________________________

export const titleGenerator = (form) => {
  switch (form) {
    case 0:
      return "What is your name ?";

    case 1:
      return "How old are you ?";

    case 2:
      return "Nice to meet you";

    default:
      return;
  }
};

export const progressBarSetting = (tab) => {
  if (tab === 1) {
    return (
      <ProgressBar
        completed={50}
        className="progress-bar"
        bgColor="#79142aee"
      />
    );
  } else if (tab === 2) {
    return (
      <ProgressBar
        completed={100}
        className="progress-bar"
        bgColor="#79142aee"
      />
    );
  }
};
