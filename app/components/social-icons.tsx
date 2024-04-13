import Image from "next/image";


export default function SocialIcons()  {
    return (
        <ul className='flex gap-6 h-full'>
            <li>
                <a href="https://www.linkedin.com/in/sergio-palomo-a7b80012b/" target="_blank" rel="noopener noreferrer">
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt='linkedin icon'
                        src='/icons/in.svg'
                        priority
                    />
                </a>

            </li>
            <li>
                <a href="https://www.facebook.com/sergi0palomo" target="_blank" rel="noopener noreferrer">
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt='linkedin icon'
                        src='/icons/face.svg'
                        priority
                    />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/sergi0palomo/" target="_blank" rel="noopener noreferrer">
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt='linkedin icon'
                        src='/icons/inst.svg'
                        priority
                    />
                </a>
            </li>

        </ul>
    )
}