import rizky from "../images/avatar-rizky-hasanuddin.webp";

function ReadedMessage() {
    return (
        <div className='rounded-md flex p-3 mb-4'>
            <img src={rizky} alt="mark avatar" className='w-[48px] h-[48px] mr-4' />
            <div>
                <div>
                    <span className='cursor-pointer text-[#1c202b] font-bold hover:text-[#0a317b]'>Rizky Hasanuddin </span>
                    <span className='text-[#5e6778] font-light'>sent you a private message </span>
                    <span className='inline-block w-[10px] h-[10px] bg-[#f65351] rounded-full ml-1'></span>
                </div>
                <p className='text-[#939dae] text-sm mb-2'>5 days ago</p>
                <p
                    className='p-3 cursor-pointer border-[1px] border-[#dde7ee] 
            rounded-md text-[#5e6778] hover:bg-[#dde7ee] hover:text-[#1c202b]'
                >
                    Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                    I'm already having lots of fun and improving my game.
                </p>
            </div>
        </div>
    );
}

export default ReadedMessage;