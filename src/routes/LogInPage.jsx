import { SignIn } from "@clerk/clerk-react";

const LogInPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/register"></SignIn>
    </div>
  );
};

export default LogInPage;
