import Image from "next/image";

export default function Logo() {
    return (
        <div className={'pt-[28px] flex flex-col items-center gap-4'}>
            <h2 className='text-sm uppercase tracking-wider font-medium'>el colorista digital</h2>
            <div className='w-[400px]'>
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