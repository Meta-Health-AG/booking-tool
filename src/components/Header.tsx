import yuuniqLogo from '@/assets/yuuniq-logo.svg'

export function Header() {
    return (
        <div className="w-[393px] h-[97px] pl-2 pr-4 bg-white border-b border-[#ECECEC] flex items-center">
            <div className="w-[120px] h-[33px]">
                <img
                    src={yuuniqLogo}
                    className="w-full h-full object-cover"
                    alt="yuuniq logo"
                />
            </div>
        </div>
    )
}