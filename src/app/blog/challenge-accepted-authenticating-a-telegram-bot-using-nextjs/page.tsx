import { permanentRedirect } from 'next/navigation';

export default function Page() {
  permanentRedirect(
    '/blog/implementing-a-magic-link-authentication-for-my-telegram-bot-using-nextjs',
  );
}
