"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Verify() {
  const searchParams = useSearchParams();
  const isGmail = searchParams.get('client') === 'gmail';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify Your Email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We&apos;ve sent a verification email to your inbox. Please check your email and click on the verification link.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          {isGmail && (
            <div className="rounded-md shadow-sm -space-y-px">
              <a
                href='https://mail.google.com' target='_blank'
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#DB4437] hover:bg-[#C53929] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DB4437]"
              >
                Open Gmail
              </a>
            </div>
          )}
          <div>
            <Link href="/login" passHref>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Go to Login Page
              </button>
            </Link>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            After verifying your email, please return to log in to your account.
          </p>
        </div>
      </div>
    </div>
  );
}
