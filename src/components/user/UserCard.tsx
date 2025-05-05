import { Button } from '@/components/ui/button';
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};

const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card className='w-full max-w-2xl mb-8'> {/* Removed lg:w-1/2 to allow full width on larger screens */}
      <CardHeader className='flex flex-row gap-x-8 items-center'> {/* Added p-6 for padding */}
        <img
          src={avatarUrl}
          alt={name}
          className='w-24 h-24 md:w-36 md:h-36 rounded object-cover flex-shrink-0' 
        />
        <div className='flex flex-col gap-y-2 flex-grow min-w-0'> 
          <CardTitle className='text-xl md:text-2xl'>{name || 'Coding Addict'}</CardTitle>
          <CardDescription>
            {bio || 'Passionate about coding and technology.'}
          </CardDescription>
          <Button 
            asChild 
            size='sm' 
            className='mt-2 w-fit' /* Changed from w-1/2 to w-fit */
          >
            <a href={url} target='_blank' rel='noreferrer'>
              View Profile
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserCard;