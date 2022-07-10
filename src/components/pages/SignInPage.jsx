import SignInForm from 'components/elements/SignInForm';
import SignUpForm from 'components/elements/SignUpForm';

function SignInPage() {
  return (
    <div className="container mx-auto p-20">
      <div className="container mx-auto pb-12">
        <h1 className="text-3xl">Post Event</h1>
        <p>To post an event on this Event Board, please sign in or create an account.</p>
      </div>

      <div className="container mx-auto grid grid-cols-2 divide-x divide-black">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignInPage;
