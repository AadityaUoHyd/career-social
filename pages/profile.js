import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { Container, Box, CircularProgress } from '@mui/material';
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <Box className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <Head>
        <title>My Profile | Career Social</title>
        <meta name="description" content="View and edit your profile" />
      </Head>
      
      <Container maxWidth="lg">
        <ProfileForm />
      </Container>
    </div>
  );
};

export default Profile;
