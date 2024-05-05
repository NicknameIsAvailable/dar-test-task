import React, { FC } from 'react';
import { IRecipeDifficultyRateProps } from '../model';
import StarFilled from "@/shared/assets/icons/star-filled.svg";
import StarOutlined from "@/shared/assets/icons/star-outliend.svg";

export const RecipeDifficultyRate: FC<IRecipeDifficultyRateProps> = ({ rate }) => {
    const rates = {
        "Easy": 
            <div className="flex gap-[2px]">
                <img src={StarFilled}/>
                <img src={StarOutlined}/>
                <img src={StarOutlined}/>
            </div>,
        "Medium": 
            <div className="flex gap-[2px]">
                <img src={StarFilled}/>
                <img src={StarFilled}/>
                <img src={StarOutlined}/>
            </div>,
        "Hard": 
            <div className="flex gap-[2px]">
                <img src={StarFilled}/>
                <img src={StarFilled}/>
                <img src={StarFilled}/>
            </div>
    }

    return rates[rate];
};
