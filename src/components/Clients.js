import React from 'react';
import { ReactComponent as Nike } from '../assets/images/Nike.svg';
import { ReactComponent as Amazon } from '../assets/images/amazon.svg';
import { ReactComponent as NorthFace } from '../assets/images/northface.svg';
import { ReactComponent as Disnep } from '../assets/images/disnep.svg';
import { ReactComponent as TheNewYorkTimes } from '../assets/images/thenewyork.svg';

const Clients = () => {
    return (
        <div className="clients">
            <div className="section-title">We have already worked with</div>
            <div className="client">
                <div className="marquee">
                    <marquee className="marquee-inner">
                        <span>
                            <Nike />
                        </span>
                        <span>
                            <Amazon />
                        </span>
                        <span>
                            <Disnep />
                        </span>
                        <span>
                            <NorthFace />
                        </span>
                        <span>
                            <TheNewYorkTimes />
                        </span>
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default Clients;
