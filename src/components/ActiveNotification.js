import mark from "../images/avatar-mark-webber.webp";
import angela from "../images/avatar-angela-gray.webp";
import jacob from "../images/avatar-jacob-thompson.webp";

function ActiveNotification() {
    const data = [
        {
            image: mark,
            name: "Mark Webber",
            content: "reacted to your recent post",
            commit: "My first tournament today!",
            time: "1m ago"
        },
        {
            image: angela,
            name: "Angela Gray",
            content: "followed you",
            commit: "",
            time: "5m ago"
        },
        {
            image: jacob,
            name: "Jacob Thompson",
            content: "has joined your group",
            commit: "Chess Club",
            time: "1 day ago"
        }
    ];
    return (
        <>
            {
                data.map((d, i) => (
                    <div className='bg-[#f7fafd] rounded-md flex p-3 shadow-sm mb-4' key={i}>
                        <img src={d.image} alt="mark avatar" className='w-[48px] h-[48px] mr-4' />
                        <div>
                            <div>
                                <span className='cursor-pointer text-[#1c202b] font-bold hover:text-[#0a317b]'>{d.name} </span>
                                <span className='text-[#5e6778] font-light'>{d.content} </span>
                                <span className='cursor-pointer text-base text-[#1c202b] font-bold hover:text-[#0a317b]'>{d.commit}</span>
                                <span className='inline-block w-[10px] h-[10px] bg-[#f65351] rounded-full ml-1'></span>
                            </div>
                            <p className='text-[#939dae] text-sm'>{d.time}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default ActiveNotification;