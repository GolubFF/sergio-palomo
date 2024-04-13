import Image from "next/image";

export default function Logo() {
    return (
        <div className={'pt-[28px] flex flex-col items-center gap-4'}>
            <h2 className='text-sm uppercase tracking-wider font-medium sm:text-xs ssm:text-[12px]'>colorista digital</h2>
            <div className='sm:w-[400px] ssm:w-[300px]'>
                <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                    alt='linkedin icon'
                    src='/logo.svg'
                    priority
                />

            </div>

        </div>
    )
}