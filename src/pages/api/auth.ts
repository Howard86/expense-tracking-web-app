import { NextApiRequest, NextApiResponse } from 'next';
import verifyIdToken from '@/server/utils/firebase';

export interface AuthResponse {
  message: string;
  status: string;
}

const authorizedEmails = process.env.AUTH_EMAILS.split(',');

export default async (
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>,
): Promise<void> => {
  const token = req.headers.token as string;

  try {
    const { email } = await verifyIdToken(token);
    if (!authorizedEmails.includes(email)) {
      throw new Error(`Unauthorized email: ${email}`);
    }

    return res.status(200).json({
      message: 'success',
      status: 'LOGGED_IN',
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: error.message,
      status: 'LOGGED_OUT',
    });
  }
};
