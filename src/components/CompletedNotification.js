import ReadedMessage from './ReadedMessage';

import kimberly from "../images/avatar-kimberly-smith.webp";
import nathan from "../images/avatar-nathan-peterson.webp";
import anna from "../images/avatar-anna-kim.webp";

import chess from "../images/image-chess.webp";

function CompletedNotification() {
    const data = [
        {
            image: kimberly,
            name: "Kimberly Smith",
            content: "commented on your picture",
            commit: "",
            time: "1 week ago"
        },
        {
            image: nathan,
            name: "Nathan Peterson",
            content: "reacted to your recent post",
            commit: "5 end-game strategies to increase your win rate",
            time: "2 weeks ago"
        },
        {
            image: anna,
            name: "Anna Kim",
            content: "left the group",
            commit: "Chess Club",
            time: "2 weeks ago"
        }
    ];
    return (
        <>
            <ReadedMessage />
            {
                data.map((d, index) => (
                    <div className='flex p-3 mb-4 relative' key={index}>
                        <img src={d.image} alt="mark avatar" className='w-[48px] h-[48px] mr-4' />
                        <div>
                            <div>
                                <span className='cursor-pointer text-[#1c202b] font-bold hover:text-[#0a317b]'>{d.name} </span>
                                <span className='text-[#5e6778] font-light'>{d.content} </span>
                                <span className='cursor-pointer text-base text-[#1c202b] font-bold hover:text-[#0a317b]'>{d.commit}</span>
                            </div>
                            <p className='text-[#939dae] text-sm'>{d.time}</p>
                        </div>
                        {
                            d.image === kimberly && <img src={chess} className="absolute right-3 top-1/2 translate-y-[-50%] w-[48px] h-[48px]" />
                        }
                    </div>
                ))
            }
        </>
    );
}

export default CompletedNotification;