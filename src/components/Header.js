function Header() {
    return (
        <header className='flex justify-between items-center mb-6'>
            <div>
                <span className='text-[#1c202b] text-xl font-bold mr-2'>Notifications</span>
                <span className='px-3 py-[2px] text-[#ffffff] text-base font-bold bg-[#0a317b] rounded-md'>3</span>
            </div>
            <p
                className='font-light text-base text-[#5e6778] cursor-pointer hover:text-[#0a317b] hover:font-medium'>
                Mark all as read
            </p>
        </header>
    );
}

export default Header;