import React, { useEffect, useState, createContext, useContext } from "react";
import ContentLayout from "../ContentLayout/ContentLayout";
import Toolbar from "../Toolbar/Toolbar";
import VerticalLayout from "../VerticalLayout/VerticalLayout";
import MobileDetect from 'mobile-detect';
import BottomPanel from '../BottomPanel/BottomPanel';

export type IsMobileContextType = {
    isMobile: boolean;
    setIsMobile: (isMobile: boolean) => void;
}
export const IsMobileContext = createContext<IsMobileContextType>({
    isMobile: false,
    setIsMobile: isMobile => console.warn('There is no a mobile provider.')
});
export const useIsMobile = () => useContext(IsMobileContext);

export default function AppLayout(props: any) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        var detector = new MobileDetect(navigator.userAgent);
        if(detector.mobile())
            setIsMobile(true);
    }, []);
    
    return (
        <IsMobileContext.Provider value={{isMobile, setIsMobile}}>
            <VerticalLayout>
                <Toolbar/>
                <ContentLayout>
                    {props.children}
                </ContentLayout>
                {isMobile && <BottomPanel/>}
            </VerticalLayout>
        </IsMobileContext.Provider>
    );
}