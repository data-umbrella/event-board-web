import { Link } from 'react-router-dom';
import confetti from 'assets/confetti.png';

function PostEventSuccessPage() {
  return (
    <>
      <div className="container mx-auto text-center pt-6 pb-32">
        <img src={confetti} alt="confetti" />

        <h1 className="text-4xl font-bold mb-6">
          Thank you for submitting your event!
        </h1>

        <h2>Admins will review your request and notify you within 2-3 business days.</h2>

        <div className="container mx-auto text-center lg:w-1/4">
          <Link
            className="block text-white bg-blue-600 px-4 py-2 rounded mt-12"
            to="/"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default PostEventSuccessPage;
