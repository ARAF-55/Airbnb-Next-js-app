import Image from 'next/image';

function MediumCard({ img, title }) {
    return (
        <div className='cursor-pointer hover:scale-105 transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image className='rounded-xl' src={img} fill alt='alter image' />
            </div>
            <h3 className='text-2xl mt-3'>
                {title}
            </h3>
        </div>
    );
}

export default MediumCard;