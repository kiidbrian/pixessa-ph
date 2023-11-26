import Input from "./Input";
import NavigationButton from "./NavigationButton";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center bg-[#ECE6DD] py-24 padding-x-1">
      <h2 className="text-center font-bold text-3xl">Join Pixessa Today</h2>
      <p className="text-center mt-3">
        Try Pixessa FREE for 30 days. No credit card required.
      </p>
      <Input
        type="text"
        className="mt-8 min-w-[390px] max-w-[450px] h-[45px] p-5 w-[80%]"
        placeholder=""
      />

      <NavigationButton
        to="/"
        className={
          "h-[55px] w-[200px] bg-[#843232] text-xs  rounded text-white mt-5"
        }
      >
        START FOR FREE
      </NavigationButton>
      <p className="text-sm text-[#545454] mt-5 text-center">
        By clicking 'Start Free Trial' you accept Pixessa's{" "}
        <a>Terms of Service</a> and <a>Privacy Policy</a>
      </p>
    </div>
  );
};

export default CallToAction;
